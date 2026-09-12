import {test} from 'node:test';
import assert from 'node:assert/strict';
import {productId,productChanges,priceOrder} from '../src/validation.js';
test('unit: IDs reject overflow and mixed characters', () => {for(const id of ['1abc',0,2147483648,null]) assert.throws(()=>productId(id),{status:400});assert.equal(productId('12'),12);});
test('unit: patch filters immutable fields', () => assert.deepEqual(productChanges({id:99,createdAt:'forged',name:' Onion '}),{name:'Onion'}));
test('unit: prices reject nonfinite, fractions and arrays', () => {for(const prices of [{'1kg':NaN},{'1kg':Infinity},{'1kg':1.5},[]]) assert.throws(()=>productChanges({prices}),{status:400});});
test('unit: order trims customer and snapshots catalog data', async () => {const value=await priceOrder({customer:{name:' A ',phone:' 123 ',address:' X '},items:[{id:1,weight:'1kg',qty:3}],total:0},async()=>({id:1,name:'Fresh',prices:{'1kg':10},active:true}));assert.equal(value.total,30);assert.equal(value.customer.name,'A');assert.equal(value.customer.payment,'Cash on delivery');});
test('unit: order rejects invalid customer without accessing data', async () => {await assert.rejects(priceOrder({},()=>assert.fail('Database must not be called')),{status:400});});
test('unit: order rejects integer overflow', async () => {await assert.rejects(priceOrder({customer:{name:'A',phone:'1',address:'X'},items:[{id:1,weight:'1kg',qty:100}]},async()=>({id:1,prices:{'1kg':2147483647}})),{status:400});});
