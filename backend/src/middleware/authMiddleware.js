import jwt from 'jsonwebtoken';
export function requireAdmin(req,res,next) {
  const match = /^Bearer\s+(\S+)$/i.exec(req.headers.authorization || '');
  if (!match) return res.status(401).json({message:'Authentication required'});
  try {
    const user = jwt.verify(match[1],process.env.JWT_SECRET,{algorithms:['HS256']});
    if (user.role !== 'admin') throw new Error();
    req.user = user; next();
  } catch { return res.status(401).json({message:'Invalid or expired token'}); }
}
