// server.js
const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
const jwtSecret = 'secret123';
app.get('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});
app.use(jwt({ secret: jwtSecret }));
const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];
app.get('/foods', (req, res) => {
  res.json(foods);
});
app.listen(3001);
console.log('App running on localhost:3001');