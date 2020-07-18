import React from 'react'
import Url, {UrlProps} from '../../components/Url'
import {render} from '@testing-library/react'

function renderUrl(props: Partial<UrlProps> = {}) {
  const defaultProps: UrlProps = {
    shortUrl: '',
    id: '',
    originalUrl: '',
    shortUrlHash: ''
  }
  return render(<Url {...defaultProps} {...props} />)
}

describe('<Url />', () => {
  test('should display short url', async () => {
    const {findByTestId} = renderUrl({shortUrl: 'test', originalUrl: 'test', id: 'test', shortUrlHash: 'test'})
    const shortUrl = await findByTestId('url-short')

    expect(shortUrl).toBeInTheDocument()
  })

  test('should not display any url', async () => {
    const {findByTestId} = renderUrl()
    const shortUrl = await findByTestId('url-short')

    expect(shortUrl.innerText).toBeUndefined()
  })
})