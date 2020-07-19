import React from 'react'
import axios from 'axios'
import {render} from '@testing-library/react'
import App from '../../components/App'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

function renderApp() {
  return render(<App />)
}

describe('<App />', () => {
  test('should render the app', () => {
    const {queryByText} = renderApp()
    const storedUrls = [{"_id":"5f0f27668c56460f6124a594","originalUrl":"google.com","shortUrl":"https://pbid.io/b453aa87","shortUrlHash":"b453aa87","dateCreated":"2020-07-15T15:57:26.820Z","__v":0},{"_id":"5f0f2c30bd4cc61091594b25","originalUrl":"https://facebook.com","shortUrl":"https://pbid.io/dfc123ee","shortUrlHash":"dfc123ee","dateCreated":"2020-07-15T16:17:52.097Z","__v":0},]

    mockedAxios.get.mockResolvedValue({data: storedUrls} as any)
  })
})
