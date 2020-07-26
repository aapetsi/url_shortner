import React from 'react'
import Url, {UrlProps} from '../../components/Url'
import {render, screen, fireEvent} from '@testing-library/react'

function renderUrl(props: Partial<UrlProps> = {}) {
  const tableRow : HTMLTableRowElement = document.createElement('tr')
  const defaultProps: UrlProps = {
    shortUrl: '',
    id: '',
    originalUrl: '',
    shortUrlHash: '',
    handleDelete(url: string) {
      return
    }
  }
  return render(<Url {...defaultProps} {...props} />)
}

describe('<Url />', () => {
  test('should display short url', async () => {
    const {findByTestId, container} = renderUrl({shortUrl: 'test', originalUrl: 'test', id: 'test', shortUrlHash: 'test'})
    const shortUrl = await findByTestId('url-short')
    
    expect(shortUrl).toBeInTheDocument()
  })

  test('should not display any url', async () => {
    const {findByTestId} = renderUrl()
    const shortUrl = await findByTestId('url-short')

    expect(shortUrl.innerText).toBeUndefined()
  })

  test('should delete url', async () => {
    const handleDeleteUrl = jest.fn()
    const {getByRole} = renderUrl({shortUrl: 'https://pbid.io/4rfad31a', originalUrl: 'https://google.com', id: 'test', shortUrlHash: '4rfad31a', handleDelete: handleDeleteUrl})

    const btn = getByRole('button', {name: /delete/i})
    fireEvent.click(btn)
    
    expect(handleDeleteUrl).toHaveBeenCalled()
    expect(handleDeleteUrl).toHaveBeenCalledTimes(1)
    expect(handleDeleteUrl).toHaveBeenCalledWith('test')
  })
})