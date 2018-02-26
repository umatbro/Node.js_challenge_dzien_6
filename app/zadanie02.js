const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static('./public/zadanie02'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/cookie/set', (req, res) => {
  let name = req.body.name;
  res.cookie('name', name, {
    maxAge: 1000 * 60 * 60 * 24 * 30
  });
  res.send('Zapamiętano imię');
});

app.get('/cookie/show', (req, res) => {
  let name = req.cookies.name;
  res.send(`Your name got from cookie: ${name}`)
});

app.get('/cookie/check', (req, res) => {
  res.send(
    req.cookies.name === undefined ?
      'Your name is not set' :
      `Your name is ${req.cookies.name}`
  );
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
