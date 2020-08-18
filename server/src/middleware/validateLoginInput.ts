import Validator from 'validator'
import isEmpty from 'is-empty'

interface Data  {
  email: string,
  password: string
}

interface FunctionReturn {
  errors: Data,
  isValid: boolean
}

const validateLoginInput =  ({ email, password }: Data): FunctionReturn => {
  const errors: Data = {} as Data

  email = !isEmpty(email) ? email : ''
  password = !isEmpty(password) ? password : ''

  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateLoginInput