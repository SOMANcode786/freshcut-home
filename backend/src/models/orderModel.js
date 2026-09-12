import {randomUUID} from 'node:crypto';
import {prisma} from '../config/prisma.js';
const shape=o=>({...o,customer:{name:o.customerName,phone:o.phone,address:o.address,area:o.area,payment:o.payment,notes:o.notes}});
export const Order={async all(){return (await prisma.order.findMany({orderBy:{createdAt:'desc'}})).map(shape)},async create(data){const c=data.customer;return shape(await prisma.order.create({data:{orderNumber:`FC-${randomUUID()}`,customerName:c.name,phone:c.phone,address:c.address,area:c.area||'',payment:c.payment||'Cash on delivery',notes:c.notes||'',items:data.items,total:data.total}}))},async updateStatus(id,status){return shape(await prisma.order.update({where:{id},data:{status}}))}};
