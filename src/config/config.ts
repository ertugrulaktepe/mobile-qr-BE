import dotenv from 'dotenv';
dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.lm6odby.mongodb.net/mobile-qr`;
const MONGO_PORT = process.env.MONGO_PORT ? +process.env.MONGO_PORT : 27017;
export const config = {
  port: MONGO_PORT,
  db: {
    url: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
  },
};
