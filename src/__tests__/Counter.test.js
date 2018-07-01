import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Counter from '../Counter'

const localVue = createLocalVue()

describe('Counter', () => {
  test('render', () => {
    expect.assertions(1)

    const wrapper = mount(Counter, {localVue})

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('counter should be initialized', () => {
    expect.assertions(1)

    const wrapper = shallowMount(Counter, {localVue})

    expect(wrapper.vm.count).toBe(0)
  })

  test('increment count', () => {
    expect.assertions(1)
    const wrapper = shallowMount(Counter, {localVue})

    wrapper.vm.increment()

    expect(wrapper.vm.count).toBe(1)
  })

  test('decrement count', () => {
    expect.assertions(1)
    const wrapper = shallowMount(Counter, {
      localVue,
      data () {return {count: 1}}
    })

    wrapper.vm.decrement()

    expect(wrapper.vm.count).toBe(0)
  })
})
