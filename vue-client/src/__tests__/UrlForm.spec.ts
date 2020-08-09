import { shallowMount, Wrapper } from '@vue/test-utils'
import { UrlForm } from '../components'

describe('UrlForm.vue component', () => {
  test('should render Url form', async () => {
    const shortenUrl = jest.fn()
    const wrapper = shallowMount(UrlForm, {
      propsData: {
        shortenUrl
      }
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.text()).toContain('Shorten')
  })

  test('should throw error with wrong url format', async () => {
    const shortenUrl = jest.fn()
    const wrapper = shallowMount(UrlForm, {
      propsData: {
        shortenUrl
      }
    })
    const button = wrapper.find('button')
    
    await button.trigger('submit')

    const errorMessage = wrapper.find('p')

    expect(errorMessage.text()).toBe('Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"')
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should successfully shorten url', async () => {
    const shortenUrl = jest.fn()
    const wrapper = shallowMount(UrlForm, {
      propsData: {
        shortenUrl
      }
    })
    const form = wrapper.find('form')
    const input = wrapper.find('input')
    input.setValue('https://google.com')
    input.trigger('change')
    form.trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(shortenUrl).toHaveBeenCalled()
    expect(shortenUrl).toHaveBeenCalledWith('https://google.com')
  })
  
})
