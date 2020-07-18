import React from 'react'
import UrlList, {UrlListProps} from '../../components/UrlList'
import {render} from '@testing-library/react'


function renderUrlList(props: Partial<UrlListProps> = {}) {
  const defaultProps : UrlListProps = {
    urls: []
  }
  return render(<UrlList {...defaultProps}  {... props} />)
}

describe('<UrlList />', () => {
  test('should display text with no urls', async () => {
    const {findByTestId} = renderUrlList()
    const noUrls = await findByTestId('no-urls')

    expect(noUrls).toBeInTheDocument()
    expect(noUrls.innerHTML).toEqual('Start shortening your urls')
  })

  test('should display all urls', async () => {
    let urls = [{_id: 'string',
      shortUrl: 'string',
      originalUrl: 'string',
      shortUrlHash: 'string'}]

    const {findByTestId} = renderUrlList({urls})
    const urlsAll = await findByTestId('urls-all')
    
    expect(urlsAll).toBeInTheDocument()
    expect(urlsAll.innerHTML).toBe("Here are your shortened urls")
  })
})