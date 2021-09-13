const express = require('express');
const router = express.Router();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));


console.log('First');
console.log('Second');
setTimeout(function() {
    console.log('First');
    }, 8080);
 console.log('Second');
 
 app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });
  const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);