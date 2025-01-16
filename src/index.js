const port = process.env.APP_PORT || 3000;

const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');


const app = express();

app.use(cors());

app.use('/api/v1', (req, res, next) => {
  next();
});

routerApi(app);

app.listen(port);