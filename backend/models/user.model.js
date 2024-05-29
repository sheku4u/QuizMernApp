import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      lowercase: true,
      trim: true,
      index: true,
      minlength: [3, "minimum 3 characters are allowed"],
      maxlength: [30, "maximum 30 characters are allowed"],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Enter Valid Email Address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = model("User", userSchema);
