import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a full name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  qr_id: {
    type: String,
    default: null,
  },
});
export const userModel = mongoose.model('User', userSchema);
