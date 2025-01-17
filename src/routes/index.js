import express from 'express'

import { Login } from '../services/login.js';
import callback from '../services/callback.js';

const routerApi = (app) => {
  app.get("/api/v1/login", Login);
  app.get("/api/v1/callback", callback);
}


export default routerApi;