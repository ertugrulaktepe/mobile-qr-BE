import { Request, Response } from "express";
import { isSuccessful, isBadRequest } from "../helpers/helpers";
import { userModel } from "../models/users";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await userModel.find();
    isSuccessful(response, "Kullanıcılar başarıyla getirildi", res);
  } catch (err: any) {
    isBadRequest(err, "Kullanıcılar getirilirken bir hata oluştu", res);
  }
};
export { getAllUsers };
