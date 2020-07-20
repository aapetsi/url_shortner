import React from 'react'
import axios from 'axios'
import {render, screen} from '@testing-library/react'
import App from '../../components/App'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<App />', () => {
  test('should render the app', () => {
    const { queryByText } = render(<App />)

    // mockedAxios.get.mockResolvedValue({data: storedUrls} as any)
  })
})
