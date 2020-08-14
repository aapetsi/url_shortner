import Validator from 'validator'
import isEmpty from 'is-empty'

type Data = {
  email: string,
  password: string
}

const validateLoginInput = async ({ email, password } : Data) => {
  const errors: Data = {email: '', password: ''}

  email = !isEmpty(email) ? email : ''
  password = !isEmpty(password) ? password : ''

  if (Validator.isEmpty(email)) {
    errors.email = 'Username is required'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }
}