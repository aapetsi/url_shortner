import { shallowMount } from '@vue/test-utils'
import { UrlList } from '../components'

describe('UrlList.vue component', () => {
  test('should render Urls list', async () => {
    const handleDelete = jest.fn()
    const wrapper = shallowMount(UrlList, {
      propsData: {
        urls: [],
        error: '',
        handleDelete
      }
    })
  })
  
})
