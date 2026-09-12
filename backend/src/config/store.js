import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import products from '../data/products.js';
const file=path.join(path.dirname(fileURLToPath(import.meta.url)),'../data/store.json');const initial={products:products.map(p=>({...p,active:true})),orders:[]};
export async function readStore(){try{return JSON.parse(await fs.readFile(file,'utf8'))}catch{await writeStore(initial);return structuredClone(initial)}}
export async function writeStore(data){await fs.writeFile(file,JSON.stringify(data,null,2))}
