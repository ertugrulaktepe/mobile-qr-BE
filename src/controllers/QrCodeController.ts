import { Request, Response } from 'express';
import QRCode from 'qrcode';
import { config } from '../config/config';
import { isSuccessful, isBadRequest } from '../helpers/helpers';
import { authenticateQr, matchNewQr } from './bussiness/qrCodeBussiness';
import { qrModel } from '../models/qrCodes';
import { Types } from 'mongoose';

const generatedQrCode = async (req: Request, res: Response) => {
  try {
    const uuid = new Types.ObjectId().toString();

    const qrCode = await QRCode.toDataURL(uuid);

    const qr_model = new qrModel({
      name: 'qr',
      qr_id: uuid,
    });

    await qr_model.save();

    isSuccessful(qrCode, 'İşlem Başarılı', res);
  } catch (err) {
    console.error(err);
    isBadRequest(err, 'İşlem başarısız tekrar deneyin', res);
  }
};

const matchQrOfUser = async (req: Request, res: Response) => {
  const { user_id, qr_id } = req.body;

  try {
    const isQrValid = await authenticateQr(qr_id);

    if (!isQrValid) isBadRequest(null, 'Okuttuğunuz kod geçersiz.', res);

    const result = await matchNewQr(user_id, qr_id);

    isSuccessful(result, 'Kullanıcı başarıyla eşleştirildi', res);
  } catch (err) {
    isBadRequest(err, 'Bir Hata Oluştu', res);
  }
};

export { generatedQrCode, matchQrOfUser };
