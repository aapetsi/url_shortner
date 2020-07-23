import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {render, act, screen, cleanup, waitForElement, findByTestId, waitForElementToBeRemoved, waitFor} from '@testing-library/react'
import App from '../../components/App'

jest.mock('axios')

let container : any | HTMLDivElement

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

afterEach(cleanup)

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<App />', () => {
  test('should render App', async () => {
    mockedAxios.get.mockResolvedValue({data: {urls: [{"_id":"5f19cc2a568952183a3c9fad","originalUrl":"https://google.com","shortUrl":"https://pbid.io/e4cdfe46","shortUrlHash":"e4cdfe46","dateCreated":"2020-07-23T17:43:06.342Z","__v":0},{"_id":"5f19ccae568952183a3c9fae","originalUrl":"https://facebook.com","shortUrl":"https://pbid.io/73c97875","shortUrlHash":"73c97875","dateCreated":"2020-07-23T17:45:18.151Z","__v":0},{"_id":"5f19cf88568952183a3c9faf","originalUrl":"https://green.com","shortUrl":"https://pbid.io/17005aee","shortUrlHash":"17005aee","dateCreated":"2020-07-23T17:57:28.361Z","__v":0}]}})
    const {getByTestId, asFragment} = render(<App />)
    const title = await waitFor(() => getByTestId('title'))
    
    expect(title.textContent).toBe('URL Shortener')
    expect(asFragment()).toMatchSnapshot()
  })
})

