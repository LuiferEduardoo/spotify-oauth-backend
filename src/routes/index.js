import express from 'express'

import { Login } from '../services/login.js';

const routerApi = (app) => {
  app.get("/api/v1/login", Login);
}


export default routerApi;