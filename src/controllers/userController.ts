import { Request, Response } from 'express';
import { isSuccessful, isBadRequest } from '../helpers/helpers';
const User = require('../models/users');
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await User.find();
    isSuccessful(response, 'Kullanıcılar başarıyla getirildi', res);
  } catch (err: any) {
    isBadRequest(err, 'Kullanıcılar getirilirken bir hata oluştu', res);
  }
};
module.exports = {
  getAllUsers,
};
