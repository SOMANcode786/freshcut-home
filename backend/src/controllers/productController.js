import {Product} from '../models/productModel.js';
import {productId, productChanges} from '../validation.js';
export async function listProducts(req,res) { res.json(await Product.all()); }
export async function getProduct(req,res) {
  const item = await Product.find(productId(req.params.id));
  item ? res.json(item) : res.status(404).json({message:'Product not found'});
}
export async function updateProduct(req,res) {
  const item = await Product.update(productId(req.params.id),productChanges(req.body));
  res.json(item);
}
