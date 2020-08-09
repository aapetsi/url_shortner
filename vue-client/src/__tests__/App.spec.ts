import { shallowMount, mount } from '@vue/test-utils'
import { App } from '../components'

describe('App.vue component', () => {
  test('should render App', () => {
    const wrapper = shallowMount(App)
    const title = wrapper.find('h1')
    const btn = wrapper.find('button')

    expect(title.text()).toBe('URL Shortener')
    expect(btn.text()).toBe('Delete all')
  })

  test('should delete all urls', () => {
    const wrapper = mount(App, {
      data: () => ({
        urls: [
          {
            _id: 'asdf',
            shortUrl: '',
            originalUrl: '',
            shortUrlHash: '',
          }
        ],
        error: ''
      })
    })
    const button = wrapper.find('.delete-all')
    console.log(button.text())
    // console.log(wrapper.html())
  })
})
