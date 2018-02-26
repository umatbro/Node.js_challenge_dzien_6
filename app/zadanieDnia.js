const comments = require('./zadanieDniaZPodpowiedzia');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public/zadanieDnia'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  let commentCookie = req.cookies.comments;
  let response = '<p><a href="/add.html">Add new comment</a></p>';
  for (let comment of comments.readComments(commentCookie)){
    response += `<p>${comment}</p>`;
  }
  res.send(response);
});

app.post('/save', (req, res) => {
  let comment = req.body.comment;
  let newCookie = comments.addComment(req.cookies.comments, comment);
  console.log(comment);
  res.cookie('comments', newCookie);
  res.send(`Your comment was added. <a href="/">Go back to homepage</a>`);
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
