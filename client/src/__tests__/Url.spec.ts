import { mount } from '@vue/test-utils'
import { Url } from '../components'

describe("Url.vue component", () => {
  test('should render the Url component', async () => {
    const wrapper = mount(Url, {
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

  test('should render empty urls', () => {
    const wrapper = mount(Url, {
      propsData: {
        shortUrl: '',
        id: '',
        originalUrl: '',
        shortUrlHash: '',
        handleDelete: jest.fn()
      }
    })

    const originalUrl = wrapper.find('[data-testid="originalUrl"]')
    const shortUrl = wrapper.find('[data-testid="shortUrl"]')
    
    expect(originalUrl.text()).toBe('')
    expect(shortUrl.text()).toBe('Copy')
  })
  

  test('should delete Url when clicked', async () => {
    const handleDelete = jest.fn()
    const wrapper = mount(Url, {
      propsData: {
        shortUrl: 'https://pbid.io/1930de5d',
        id: '5f2e50a5fc53ec4012fdc0ac',
        originalUrl: 'www.google.com',
        shortUrlHash: '1930de5d',
        handleDelete
      }
    })
    const btn = wrapper.find('.delete-one')
    wrapper.trigger('click')
    
    await btn.trigger('click')
  
    expect(handleDelete).toHaveBeenCalled()
    expect(handleDelete).toHaveBeenCalledWith('5f2e50a5fc53ec4012fdc0ac')
    expect(handleDelete).toHaveBeenCalledTimes(1)
  })
})
