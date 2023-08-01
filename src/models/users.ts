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
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('User', userSchema);
