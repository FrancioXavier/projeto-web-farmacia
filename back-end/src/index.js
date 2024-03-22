import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { resolve } from 'path';
import orderRoutes from './routes/orderRoutes';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import catergoryRoutes from './routes/categoryRoute';
import productRoutes from './routes/productRoutes';

const whiteList = [`http://localhost:${process.env.PORT}`];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      '/images/',
      express.static(resolve(__dirname, '..', 'uploads', 'images')),
    );
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/category', catergoryRoutes);
    this.app.use('/product', productRoutes);
    this.app.use('/orders', orderRoutes);
  }
}

export default new App().app;
