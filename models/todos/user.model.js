import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is require'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
