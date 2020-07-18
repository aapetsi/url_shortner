import React from 'react'
import Url, {UrlProps} from '../../components/Url'
import {render, fireEvent, waitForElement} from '@testing-library/react'

describe('<Url />', () => {
  let defaultProps : {
    key: string,
    shortUrl: string,
    id: string,
    originalUrl: string,
    shortUrlHash: string
  }
  
  test('should match snapshot', async () => {
    const {findByTestId} = render(<Url {...defaultProps}/>)
    const url = await findByTestId('url')
    expect(url).toMatchSnapshot()
  })
})