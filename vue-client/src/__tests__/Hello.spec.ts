import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components'

describe("App.vue component", () => {
  test('dummy test', () => {
    const div = document.createElement('div')
    const wrapper = shallowMount(HelloWorld, {
      attachTo: div
    })
    console.log(wrapper.html())
    expect(1).toBe(1)
  })
})
