import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {render, screen, cleanup} from '@testing-library/react'
import App from '../../components/App'
import { act } from 'react-dom/test-utils'

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
    mockedAxios.get.mockResolvedValue({data: {urls: []}})
    const {queryByTestId, queryByText} = render(<App />)

    expect(queryByText(/URL Shortener/)?.textContent).toBe('URL Shortener')
    expect(queryByText(/Start shortening your urls/)?.textContent).toBe('Start shortening your urls')
  })
})

