import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const adminCredentials = { email: 'admin@admin.com', password: 'admin123' };
const jwtSecret = 'secret_key';

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (
    email === adminCredentials.email &&
    password === adminCredentials.password
  ) {
    const token = jwt.sign({ role: 'admin' }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    const token = jwt.sign({ role: 'guest' }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
