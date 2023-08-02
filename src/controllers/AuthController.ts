import { Request, Response } from 'express';

const userModel = require('../models/users');
const { isSuccessful, isBadRequest } = require('../helpers/helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      isBadRequest(null, 'Kullanıcı bulunamadı', res);
    }
    const result = await bcrypt.compare(password, user.password);

    const token = await jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    isSuccessful({ token, user }, 'Auth successful', res);
  } catch (err: any) {
    console.log('err', err);
    isBadRequest(err, 'Kullanıcılar getirilirken bir hata oluştu', res);
  }
};
module.exports = {
  login,
};
