import React from 'react'
import { mount, shallow } from 'enzyme'
import { Container } from '../index'

describe('Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <Container center scrollable>
        <div className="foo">Bar</div>
      </Container>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render Container with children', () => {
    const wrapper = mount(
      <Container center scrollable>
        <div className="foo">Bar</div>
      </Container>,
    )

    expect(wrapper.contains(<div className="foo">Bar</div>)).toBe(true)
    expect(wrapper.prop('center')).toEqual(true)
    expect(wrapper.prop('scrollable')).toEqual(true)
  })
})
