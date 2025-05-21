import http from 'http';
import express from 'express';
import cors from 'cors';

import productRouter from './routes/products'

import config from './config';
import { DrizzleProvider } from './database/dbProvider';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import { notFoundMiddleware } from './middlewares/notFound';

const app = express();
const server = http.createServer(app);
const port = config.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await DrizzleProvider.runMigrations();
    server.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
