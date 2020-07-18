import React from 'react'
import UrlForm, {UrlFormProps} from '../../components/UrlForm'
import {render, fireEvent, waitForElement} from '@testing-library/react'

function renderForm(props: Partial<UrlFormProps> = {}) {
  const defaultProps: UrlFormProps = {
    shortenUrl() {
      return
    }
  }
  return render(<UrlForm {...defaultProps} {...props} />)
}

describe('<App />', () => {
  test('should submit the form with the correct value', async () => {
    const {findByTestId} = renderForm()
    const urlForm = await findByTestId('url-form')
    expect(urlForm).toHaveFormValues({
      text: ''
    })
  })
})