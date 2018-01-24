import React from 'react'
import { mount } from 'enzyme'

import Counter from 'components/counter'

describe('<Counter/>', () => {

  test('debería empezar en 0', () => {
    const wrapper = mount(<Counter/>)
    expect(wrapper.state().count).toBe(0)
  })

  test('debería incrementar en 1 al clicar el botón', () => {
    const wrapper = mount(<Counter/>)
    wrapper.find('button').simulate('click')
    expect(wrapper.state().count).toBe(1)
    expect(wrapper.find('h1').text()).toBe('1')
  })

})
