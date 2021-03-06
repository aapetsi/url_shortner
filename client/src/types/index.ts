import VueRouter from 'vue-router';

export interface Url {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string,
  handleDelete: (id: string) => void
}

export interface Urls {
  _id: string,
  originalUrl: string,
  shortUrl: string,
  shortUrlHash: string,
  dateCreated: Date
__v: number
}

export type UrlsType = Urls[]

export interface User {
  _id: string,
  email: string,
  username: string
}

export interface Token {
  expiresIn: string,
  token: string
}

export interface ErrorData {
  key: string,
  value: any
}

export interface Errors {
  [key: string]: ErrorData
}

export interface UserState {
  user?: User,
  errors: Errors,
  isLoggedIn: boolean,
  token?: Token
}

export interface RegisterPayload {
  email: string, 
  username: string, 
  password: string, 
  password2: string, 
  router: VueRouter
}

export interface RootState {
  urls: UrlState,
  user: UserState
}

export interface UrlState {
  urls: UrlsType,
  errors: Errors,
  formError: string,
  saveSuccess: boolean
}



