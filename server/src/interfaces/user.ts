import { Document } from "mongoose";

export interface UserType extends Document {
  _id: string;
  username: string;
  password: string;
  email: string;
  type: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}

type Category = {
  name: string;
};

export type ResponseUser = {
  _id: string;
  username: string;
  password: string | undefined;
  email: string;
  type: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};

export enum userErrors {
  wrongEmailOrPassword = "Wrong email or password",
  notExistingUser = "No existing user",
}

export enum succsessMessages {
  updatedSuccessfully = "Updated successfully",
}
