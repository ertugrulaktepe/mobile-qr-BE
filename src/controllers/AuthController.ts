import { Request, Response } from "express";
import { userModel } from "../models/users";
import { isBadRequest, isServerError } from "../helpers/helpers";
import { isSuccessful } from "../helpers/helpers";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      isBadRequest(null, "Kullanıcı bulunamadı", res);
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      isBadRequest(null, "Kullanıcı bulunamadı", res);
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    isSuccessful({ token, user }, "Auth successful", res);
  } catch (err: any) {
    console.log("err", err);
    isBadRequest(err, "Kullanıcılar getirilirken bir hata oluştu", res);
  }
};
const register = async (req: Request, res: Response) => {
  const { email, password, phone, name } = req.body;
  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      isBadRequest(
        null,
        "Bu email adresine kayıtlı bir kullanıcı bulunmaktadır",
        res,
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new userModel({
      email,
      password: hashedPassword,
      phone,
      name,
    });
    const result = await user.save();
    isSuccessful(result, "Kayıt işlemi başarılı", res);
  } catch (err: any) {
    isServerError(err, "Kayıt işlemi sırasında bir hata meydana geldi", res);
  }
};
const verifyEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const checkEmail = await userModel.findOne({ email });
    const isRegisteredUser = checkEmail ? true : false;

    isSuccessful({ isRegisteredUser }, "İşlem Başarılı", res);
  } catch (err) {
    throw new Error(err);
  }
};
export { login, verifyEmail, register };
