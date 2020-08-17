import {Document, Model} from 'mongoose'

export interface IUser {
  username: string,
  email: string,
  date: Date
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument>{}