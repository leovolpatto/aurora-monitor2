import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import compression from 'compression';

const app = express();
app.use(compression());

app.get('/', function (req: any, res: any) {
  res.json('ok...');
});

const PORT = process.env.PORT || 4445;
const httpServer = createServer(app);
httpServer.listen({
  port:PORT
}, (): void =>{
  console.log(`Running at http://127.0.0.1:${PORT}/`);
});