const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public/zadanie01/'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/check', (req, res) => {
  let {num1, num2} = req.body;
  [num1, num2] = [parseInt(num1), parseInt(num2)];
  res.send(`${num2} ${num1 % num2 === 0 ? '' : 'NIE '}jest dzielnikiem ${num1}`);
});

app.listen(3000, () => {
  console.log('Server on 3000');
});
