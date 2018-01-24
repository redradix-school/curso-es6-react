import React from 'react'
import { mount } from 'enzyme'

import Button from 'components/button'

describe('<Button/>', () => {

  test('debería mostrar el texto indicado en la prop label', () => {
    const wrapper = mount(<Button label="test"/>)
    expect(wrapper.find('button').text()).toBe('test')
  })

  test('debería ejecutar su propiedad action cuando sea clicado', () => {
    const spy = jest.fn()
    const wrapper = mount(<Button action={spy}/>)
    wrapper.find('button').simulate('click')
    expect(spy.mock.calls.length).toBe(1)
  })

})
