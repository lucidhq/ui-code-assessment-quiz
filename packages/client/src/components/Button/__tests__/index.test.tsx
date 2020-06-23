import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '../index'

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <Button onClick={() => console.log('test')}>my button</Button>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call mock function when button is clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<Button onClick={mockFn}>my button</Button>)

    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const mockOnClick = jest.fn()
    const wrapper = mount(
      <Button onClick={mockOnClick} disabled>
        my button
      </Button>,
    )

    wrapper.simulate('click')
    expect(mockOnClick).toHaveBeenCalledTimes(0)
  })
})
