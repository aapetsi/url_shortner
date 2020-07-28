import React from 'react'
import UrlForm, {UrlFormProps} from '../../components/UrlForm'
import {render, fireEvent, screen} from '@testing-library/react'

function renderForm(props: Partial<UrlFormProps> = {}) {
  const defaultProps: UrlFormProps = {
    shortenUrl() {
      return
    }
  }
  return render(<UrlForm {...defaultProps} {...props} />)
}

describe('<UrlForm />', () => {
  test('should submit the form with the correct value', async () => {
    const {findByTestId} = renderForm()
    const urlForm = await findByTestId('url-form')
    expect(urlForm).toHaveFormValues({
      text: ''
    })
  })

  test('should allow entering a url', async () => {
    const {findByTestId} = renderForm()
    const url = await findByTestId('url')

    fireEvent.change(url, {target: {value: 'test'}})

    expect(url).toHaveDisplayValue('test')
  })
  
  test('should submit form', async () => {
    const handleSubmit = jest.fn()
    const {findByTestId} = renderForm({shortenUrl: handleSubmit})
    const submitBtn = await findByTestId('submit')
    const url = await findByTestId('url')
    
    fireEvent.change(url, {target: {value: 'https://google.com'}})

    fireEvent.submit(url)
    
    expect(handleSubmit).toHaveBeenCalled()
    expect(handleSubmit).toHaveBeenCalledWith("https://google.com")
  })

  test('should display error with wrong url type', async () => {
    const {findByTestId} = renderForm()
    const url = await findByTestId('url')
    
    fireEvent.change(url, {target: {value: 'test'}})
    fireEvent.submit(url)

    const errorText = await findByTestId('error-text')

    expect(errorText.innerHTML).toBe('Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"')
  })
  
})