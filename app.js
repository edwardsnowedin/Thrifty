// Import express modules
const express = require('express');
const logger = require('morgan');

// Initialize our express sever
const app = express();

// The port our server will run on
const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// Tell our application what port to listen to so we can acess our server
app.listen(port, () => console.log('Server is running on', `${port}`));

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Test'
  })
})
