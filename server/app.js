const express = require('express');
const bodyParser = require('body-parser');
const bookmarkRoute = require('./routes/bookmark');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use('/bookmarks', bookmarkRoute);

/* istanbul ignore next */
app.get('/', (req, res) => {
  res.send('OK!');
});

module.exports = app;
