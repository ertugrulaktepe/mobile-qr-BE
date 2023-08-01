import { config } from './config/config';
import express, { Request, Response } from 'express';
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err: any) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World',
  });
});
app.use('/api/users', userRoutes);