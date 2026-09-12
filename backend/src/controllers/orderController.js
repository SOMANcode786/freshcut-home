import {Order} from '../models/orderModel.js';
import {Product} from '../models/productModel.js';
import {priceOrder} from '../validation.js';
const statuses = ['New','Confirmed','Preparing','Out for delivery','Delivered','Cancelled'];
export async function createOrder(req,res) { res.status(201).json(await Order.create(await priceOrder(req.body, id => Product.find(id)))); }
export async function listOrders(req,res) { res.json(await Order.all()); }
export async function updateOrder(req,res) {
  if (!statuses.includes(req.body?.status)) return res.status(400).json({message:'Invalid status'});
  res.json(await Order.updateStatus(req.params.id,req.body.status));
}
