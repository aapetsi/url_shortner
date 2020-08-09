import { shallowMount } from '@vue/test-utils'
import Url from '../components/Url.vue'

describe("Url.vue component", () => {
  test('should render the Url component', async () => {
    // const div = document.createElement('div')
    const wrapper = shallowMount(Url, {
      propsData: {
        shortUrl: 'https://pbid.io/1930de5d',
        id: '"5f2e50a5fc53ec4012fdc0ac"',
        originalUrl: 'www.google.com',
        shortUrlHash: '1930de5d',
        handleDelete: jest.fn()
      }
    })
    const shortUrl = wrapper.find('[data-testid="shortUrl"]')
    const originalUrl = wrapper.find('[data-testid="originalUrl"]')
    
    expect(originalUrl.text()).toBe('www.google.com')
    expect(shortUrl.text()).toContain('https://pbid.io/1930de5d')
  })

  test('should delete Url when clicked', async () => {
    const handleDelete = jest.fn()
    const wrapper = shallowMount(Url, {
      propsData: {
        shortUrl: 'https://pbid.io/1930de5d',
        id: '"5f2e50a5fc53ec4012fdc0ac"',
        originalUrl: 'www.google.com',
        shortUrlHash: '1930de5d',
        handleDelete
      }
    })
    const btn = wrapper.find('.delete-one')
    // const originalUrl = wrapper.find('[data-testid="originalUrl"]')

    // expect(originalUrl.text()).toContain('www.google.com')
    
    await btn.trigger('click')
    
    
  })
})
