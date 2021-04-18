import { Request, Response } from "express";

const express = require('express');

const app = express();

app.get('/', (req : Request, res : Response ) => {
    res.send('Hello World!')
  })

  app.listen(3000, function () {
    console.log('App is listening on port 3000');
});