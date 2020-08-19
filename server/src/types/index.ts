import { Document, Model } from 'mongoose'
import { Request } from 'express'

export interface MongoVariables {
  MONGO_HOSTNAME : string
  MONGO_DB: string
  MONGO_DB_TEST: string
  MONGO_PORT: number
}

export interface ITokenData {
  token: string;
  expiresIn: number;
}

// export interface IDecodedToken {
//   decodedToken: DataStoredInToken
// }

export interface DataStoredInToken {
  id: string,
  username: string
}

// export interface IRequest extends IDecodedToken, Request {}

// export interface RequestWithUser extends Request {
//   user: IUser
// }

declare global {
  namespace Express {
    export interface Request {
      user: IUser
    }
  }
}

export interface IUser {
  username: string,
  email: string,
  password: string,
  date: Date
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument>{}