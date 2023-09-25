import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import { userRoutes } from './routes/userRoutes';
import { authRoutes } from './routes/authRoutes';
import { config } from './config/config';

import { qrCodeRoutes } from './routes/qrCodeRoutes';
const swaggerDocument = require('./swagger/swagger.json');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(config.port, () => {
  console.log(`server run on port ${config.port}`);
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/qr', qrCodeRoutes);
