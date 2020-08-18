import Validator from 'validator'
import isEmpty from 'is-empty'

interface Data  {
  email: string,
  username: string,
  password: string,
  password2: string
}

interface FunctionReturn {
  errors: Data,
  isValid: boolean
}

const validateRegisterInput =  ({ email, username, password, password2 }: Data): FunctionReturn => {
  const errors: Data = {} as Data

  email = !isEmpty(email) ? email : ''
  username = !isEmpty(username) ? username : ''
  password = !isEmpty(password) ? password : ''
  password2 = !isEmpty(password2) ? password2 : ''

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required'
  }

  if (!Validator.isLength(username, {min: 2, max: 30})) {
    errors.username = 'Username must be at least 2 characters'
  }

  if (Validator.isEmpty(username)) {
    errors.username = 'Username is required'
  }

  if (!Validator.isLength(password, {min: 6})) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required'
  } else if (!Validator.equals(password, password2)) {
    errors.password2 = 'Both passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateRegisterInput