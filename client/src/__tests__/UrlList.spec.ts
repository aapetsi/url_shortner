import { shallowMount } from '@vue/test-utils'
import { UrlList } from '../components'

describe('UrlList.vue component', () => {
  test('should render no Urls list', async () => {
    const handleDelete = jest.fn()
    const wrapper = shallowMount(UrlList, {
      propsData: {
        urls: [],
        error: '',
        handleDelete
      }
    })
    const urlList = wrapper.find('tbody')
    expect(urlList.element.children).toHaveLength(0)
  })
  
  test('should render 5 urls', async () => {
    const handleDelete = jest.fn()
    const wrapper = shallowMount(UrlList, {
      propsData: {
        urls: [
          {
            _id: 'asdf',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          },
          {
            _id: 'as',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          },
          {
            _id: 'd',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          },
          {
            _id: 'dd',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          },
          {
            _id: 'fa',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          }
        ],
        error: '',
        handleDelete
      }
    })
    const urlList = wrapper.find('tbody')
    expect(urlList.element.children).toHaveLength(5)
  })
})
