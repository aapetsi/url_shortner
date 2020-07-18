import React from 'react'
import App from '../../components/App'
import {render, fireEvent, waitForElement, screen} from '@testing-library/react'

describe('<App />', () => {
  test('should render App component', () => {
    render(<App />)
    
    expect(screen.queryByText(/URL Shortener/)).toBeInTheDocument()
  })
})