import { mount } from '@vue/test-utils'
import UrlForm from '../UrlForm.vue'

// const UrlForm = {
//   template: '<p>{{ msg }}</p>',
//   props: ['msg']
// }

describe('UrlForm Component', () => {
  test('should render form', () => {
    const wrapper = mount(UrlForm, {
      propsData: {
        msg: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
})
