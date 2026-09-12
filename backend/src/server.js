import 'dotenv/config';
import app from './app.js';
const required=['DATABASE_URL','JWT_SECRET','ADMIN_EMAIL','ADMIN_PASSWORD'];
const missing=required.filter(key=>!process.env[key]);
if(missing.length)throw new Error(`Missing environment values: ${missing.join(', ')}`);
const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`FreshCut API running at http://localhost:${port}`));
