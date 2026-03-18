const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/', (req, res) => {
  res.send('API running');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', app: 'PRO ONLINE' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
