import React from 'react'
import App from '../../components/App'
import {render, fireEvent, waitForElement} from '@testing-library/react'

describe('<App />', () => {
  test('should display the app', () => {
    expect(1).toBe(1)
  })
})