import {test, before, after, beforeEach} from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';
import app from '../src/app.js';
import {prisma} from '../src/config/prisma.js';

// In-memory database boundary: the real HTTP routes, middleware, controllers,
// and models run without connecting to Neon or changing customer data.
process.env.JWT_SECRET = 'isolated-test-secret';
process.env.ADMIN_EMAIL = 'admin@example.test';
process.env.ADMIN_PASSWORD = 'test-only-password';
let products, orders, server, base;
const missing = () => Object.assign(new Error('Missing record'), {code: 'P2025'});
prisma.product.findMany = async () => structuredClone(products);
prisma.product.findUnique = async ({where}) => structuredClone(products.find(p => p.id === where.id) || null);
prisma.product.update = async ({where, data}) => {
  const product = products.find(p => p.id === where.id);
  if (!product) throw missing();
  return Object.assign(product, data);
};
prisma.order.findMany = async () => structuredClone(orders);
prisma.order.create = async ({data}) => {
  const order = {id: `order-${orders.length + 1}`, status: 'New', createdAt: new Date().toISOString(), ...data};
  orders.push(order); return order;
};
prisma.order.update = async ({where, data}) => {
  const order = orders.find(o => o.id === where.id);
  if (!order) throw missing();
  return Object.assign(order, data);
};
const token = (payload = {role:'admin'}) => jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1h'});
const orderBody = () => ({customer:{name:'Test Customer',phone:'03001234567',address:'Test address'},items:[{id:1,weight:'250g',qty:2,price:1}],total:2});
async function request(path, {method='GET', body, auth, raw}={}) {
  const response = await fetch(base + path, {method,headers:{'content-type':'application/json',...(auth ? {authorization:auth} : {})},body:raw ?? (body === undefined ? undefined : JSON.stringify(body))});
  return {status:response.status, data:await response.json()};
}
before(async () => {server = app.listen(0, '127.0.0.1'); await new Promise(resolve => server.once('listening', resolve)); base = `http://127.0.0.1:${server.address().port}`;});
after(async () => {await new Promise(resolve => server.close(resolve)); await prisma.$disconnect();});
beforeEach(() => {products = [{id:1,name:'Onion',slug:'onion',prices:{'250g':99},active:true},{id:2,name:'Unavailable',slug:'unavailable',prices:{'250g':50},active:false}]; orders=[];});
test('GET health', async () => assert.deepEqual(await request('/api/health'), {status:200,data:{status:'ok'}}));
test('unknown routes return 404', async () => assert.equal((await request('/api/missing')).status,404));
test('valid login returns admin JWT', async () => {const result=await request('/api/auth/login',{method:'POST',body:{email:process.env.ADMIN_EMAIL,password:process.env.ADMIN_PASSWORD}}); assert.equal(result.status,200); assert.equal(jwt.verify(result.data.token,process.env.JWT_SECRET).role,'admin'); assert.equal(result.data.user.email,process.env.ADMIN_EMAIL);});
test('me returns current admin user profile', async () => {const result=await request('/api/auth/me',{auth:`Bearer ${token({email:'admin@example.test',role:'admin'})}`}); assert.equal(result.status,200); assert.equal(result.data.user.email,'admin@example.test');});
test('wrong login rejected', async () => assert.equal((await request('/api/auth/login',{method:'POST',body:{email:'wrong',password:'wrong'}})).status,401));
test('empty login is a client error', async () => assert.equal((await request('/api/auth/login',{method:'POST'})).status,400));
test('malformed JSON is 400', async () => assert.equal((await request('/api/auth/login',{method:'POST',raw:'{'})).status,400));
test('list and get public products', async () => {assert.equal((await request('/api/products')).data.length,2);assert.equal((await request('/api/products/1')).data.name,'Onion');});
test('missing product returns 404', async () => assert.equal((await request('/api/products/99')).status,404));
for (const id of ['abc','-1','1.5']) test(`invalid product id ${id} returns 400`,async () => assert.equal((await request(`/api/products/${id}`)).status,400));
for (const [method,path] of [['GET','/api/orders'],['PATCH','/api/products/1'],['PATCH','/api/orders/one/status']]) {
  test(`${method} ${path} requires authentication`, async () => assert.equal((await request(path,{method,body:method==='PATCH'?{}:undefined})).status,401));
}
for (const auth of ['Bearer invalid', 'Basic anything']) test(`reject ${auth}`, async () => assert.equal((await request('/api/orders',{auth})).status,401));
test('reject expired JWT', async () => assert.equal((await request('/api/orders',{auth:`Bearer ${jwt.sign({role:'admin'},process.env.JWT_SECRET,{expiresIn:-1})}`})).status,401));
test('reject non-admin JWT', async () => assert.equal((await request('/api/orders',{auth:`Bearer ${token({role:'customer'})}`})).status,401));
test('reject bare JWT', async () => assert.equal((await request('/api/orders',{auth:token()})).status,401));
test('admin can update product and read persisted result', async () => {const result=await request('/api/products/1',{method:'PATCH',auth:`Bearer ${token()}`,body:{name:'Fresh Onion',prices:{'250g':120},active:false,id:42}});assert.equal(result.status,200);assert.equal(result.data.id,1);assert.equal((await request('/api/products/1')).data.prices['250g'],120);});
test('update missing product returns 404', async () => assert.equal((await request('/api/products/99',{method:'PATCH',auth:`Bearer ${token()}`,body:{name:'Test'}})).status,404));
for (const body of [{prices:{'250g':-1}},{prices:{}},{prices:{'250g':'99'}},{name:''},{active:'false'},{}]) test(`invalid product patch ${JSON.stringify(body)}`,async () => assert.equal((await request('/api/products/1',{method:'PATCH',auth:`Bearer ${token()}`,body})).status,400));
test('create order uses catalog prices and names, ignores forged total', async () => {const result=await request('/api/orders',{method:'POST',body:orderBody()});assert.equal(result.status,201);assert.equal(result.data.total,198);assert.equal(result.data.items[0].price,99);assert.equal(result.data.items[0].name,'Onion');assert.equal(result.data.customer.name,'Test Customer');});
for (const patch of [{items:[]},{items:'bad'},{customer:{}},{customer:{name:' ',phone:'1',address:'a'}},{items:[{id:1,weight:'250g',qty:-1}]},{items:[{id:1,weight:'250g',qty:1.5}]},{items:[{id:1,weight:'1kg',qty:1}]},{items:[{id:99,weight:'250g',qty:1}]},{items:[{id:2,weight:'250g',qty:1}]}]) test(`invalid order ${JSON.stringify(patch)}`,async () => assert.equal((await request('/api/orders',{method:'POST',body:{...orderBody(),...patch}})).status,400));
test('order list and status lifecycle', async () => {const created=await request('/api/orders',{method:'POST',body:orderBody()});const auth=`Bearer ${token()}`;assert.equal((await request('/api/orders',{auth})).data.length,1);for(const status of ['Confirmed','Preparing','Out for delivery','Delivered','Cancelled']) {const result=await request(`/api/orders/${created.data.id}/status`,{method:'PATCH',auth,body:{status}});assert.equal(result.status,200);assert.equal(result.data.status,status);}});
test('invalid order status returns 400', async () => assert.equal((await request('/api/orders/one/status',{method:'PATCH',auth:`Bearer ${token()}`,body:{status:'Invalid'}})).status,400));
test('missing order update returns 404', async () => assert.equal((await request('/api/orders/missing/status',{method:'PATCH',auth:`Bearer ${token()}`,body:{status:'Confirmed'}})).status,404));
