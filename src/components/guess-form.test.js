import React from 'react'
import { shallow, mount } from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />)
  })
  it('Should invoke onMakeGuess upon form submit', () => {
    const callback = jest.fn()
    const wrapper = mount(<GuessForm onMakeGuess={callback} />)
    const value = 5
    wrapper.find('input[type="number"]').instance().value = value
    wrapper.simulate('submit')
    expect(callback).toHaveBeenCalledWith(value.toString())
  })
  it('Should clear the input form after submit', () => {
    const wrapper = mount(<GuessForm />)
    const input = wrapper.find('input[type="number"]')
    input.instance().value = 3
    wrapper.simulate('submit')
    expect(input.instance().value).toEqual('')
  })
})
