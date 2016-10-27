const express = require('express');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');

app.listen(port, () => console.log('Server is running on', `${port}`));
