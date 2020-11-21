import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  phoneNumber: Number;
  password: string;
  birthDate: Date;
  fullname: string;
  tournament: string;
  subdistrict: string;
  role: number;
  picture: string;
  resetLink: any;
}
