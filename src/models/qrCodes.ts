import mongoose, { mongo } from 'mongoose';

const qrCodesSchema = new mongoose.Schema({
  qr_id: {
    type: String,
  },
  name: {
    type: String,
  },
});
export const qrModel = mongoose.model('Qr', qrCodesSchema);
