import React, {FunctionComponent} from 'react'
import Axios from 'axios'

export type UrlProps =  {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string
}

const Url: FunctionComponent<UrlProps> = ({id, originalUrl, shortUrl, shortUrlHash}) => {

  const handleOpenLink = () => {
    window.open(originalUrl, '_blank')
  }

  return (
    <tr className="link">
      <td>
        {originalUrl}
      </td>
      <td>
        {shortUrl}
      </td>
    </tr>
    // <div data-testid="url-container">
    //   <p
    //     className='link'
    //     onClick={handleOpenLink}
    //     data-testid="url-short"
    //   >
    //     {shortUrl}
    //   </p>
    // </div>
  )
}

export default Url
