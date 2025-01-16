const port = process.env.APP_PORT || 3000;
import express from 'express';
import cors from 'cors'

import routerApi from './routes/index.js';

const app = express();

app.use(cors());

routerApi(app);

app.listen(port);