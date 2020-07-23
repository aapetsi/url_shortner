import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {render, screen} from '@testing-library/react'
import App from '../../components/App'
import { act } from 'react-dom/test-utils'

jest.mock('axios')

let container : any

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<App />', () => {
  test('should render the app with no urls', () => {
    

    act(() => {
      mockedAxios.get.mockResolvedValueOnce({data: {urls: []}})
      ReactDOM.render(<App />, container)
    
    })

  
  })

  // test('should render the app with 2 urls', () => {
  //   mockedAxios.get.mockResolvedValueOnce({data: {urls: [{"_id":"5f1944723798f131bc62a742","originalUrl":"https://google.com","shortUrl":"https://pbid.io/535beaed","shortUrlHash":"535beaed","dateCreated":"2020-07-23T08:04:02.210Z","__v":0},{"_id":"5f1944f13798f131bc62a743","originalUrl":"https://yahoo.com","shortUrl":"https://pbid.io/38abb752","shortUrlHash":"38abb752","dateCreated":"2020-07-23T08:06:09.547Z","__v":0},{"_id":"5f194e553798f131bc62a744","originalUrl":"https://gmail.com","shortUrl":"https://pbid.io/1764ae87","shortUrlHash":"1764ae87","dateCreated":"2020-07-23T08:46:13.446Z","__v":0},{"_id":"5f19c5b2c1131411dcf3aedc","originalUrl":"https://tinder.com","shortUrl":"https://pbid.io/4f311871","shortUrlHash":"4f311871","dateCreated":"2020-07-23T17:15:30.151Z","__v":0}]}})
  //   act(() => {
  //     ReactDOM.render(<App />, container)
      
      
  //   })

  //   screen.debug
  // })
})
