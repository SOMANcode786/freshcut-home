import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { email, password } = req.body || {};
  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: { email, role: 'admin' } });
}

export async function me(req, res) {
  res.json({ user: req.user });
}
