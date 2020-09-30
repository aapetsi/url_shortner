import { shallowMount, mount } from '@vue/test-utils'
import App from '../components/UrlApp/MainApp.vue'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('App.vue component', () => {
  test('should render App', () => {
    const wrapper = shallowMount(App)
    const title = wrapper.find('h1')
    const btn = wrapper.find('button')

    expect(title.text()).toBe('URL Shortener')
    expect(btn.text()).toBe('Delete all')
    expect(btn.attributes().disabled).toBe('disabled')
  })

 
  test('should display confirm delete all message', () => {
    window.confirm = jest.fn()
    const wrapper = shallowMount(App, {
      data: () => ({
        urls: [
          {
            _id: 'asdf',
            shortUrl: 'shortUrl',
            originalUrl: 'originalUrl',
            shortUrlHash: '',
          }
        ],
        error: ''
      })
    })
    const button = wrapper.find('.delete-all')
    button.trigger('click')
    expect(window.confirm).toBeCalledWith('Are you sure you want to delete all urls')
  })

  test('should fetch urls when mounted', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          _id: 'somerandomid',
          originalUrl: 'test',
          shortUrl: 'test',
          shortUrlHash: 'test',
          dateCreated: 'test',
          __v: 0
        }
      ]
    })
    const wrapper = shallowMount(App, {
      data: () => ({
        urls: [],
        error: ''
      }),
    })
    const btn = wrapper.find('button')
    
    expect(axios.get).toBeCalled()
    expect(axios.get).toBeCalledWith('http://localhost:3000/api/url/get_urls')
  })
})
