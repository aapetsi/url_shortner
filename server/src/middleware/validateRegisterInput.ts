import Validator from 'validator'
import isEmpty from 'is-empty'

interface Data  {
  email: string,
  username: string,
  password: string
}

interface FunctionReturn {
  errors: Data,
  isValid: boolean
}

const validateRegisterInput =  ({ email, username, password }: Data): FunctionReturn => {
  const errors: Data = <Data>{}

  email = !isEmpty(email) ? email : ''
  username = !isEmpty(username) ? username : ''
  password = !isEmpty(password) ? password : ''

  if (Validator.isEmpty(email)) {
    errors.email = 'Username is required'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateRegisterInput