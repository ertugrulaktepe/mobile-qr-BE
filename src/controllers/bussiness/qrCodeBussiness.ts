import QRCode from 'qrcode';
import { qrModel } from '../../models/qrCodes';
import { userModel } from '../../models/users';

const matchNewQr = async (id: string, qr_id: string) => {
  const result = await userModel.updateOne(
    { _id: id },
    {
      qr_id,
    },
  );

  return result;
};

const authenticateQr = async (qr_id: string) => {
  const result = await qrModel.findOne({ qr_id });
  return result;
};

export { matchNewQr, authenticateQr };
