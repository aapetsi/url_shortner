import { shallowMount } from '@vue/test-utils'
import { UrlForm } from '../components'

describe('UrlForm.vue component', () => {
  test('should render Url form', async () => {
    const wrapper = shallowMount(UrlForm, {
      propsData: {
        shortenUrl: jest.fn()
      }
    })
  })
  
})
