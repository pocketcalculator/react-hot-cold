import React from 'react'
import { shallow } from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />)
  })
  it('Renders a list of guesses', () => {
    const guesses = [ 0, 10, 50, 100 ]
    const wrapper = shallow(<GuessList guesses={guesses} />)
    const results = wrapper.find('li')
    expect(results.length).toEqual(guesses.length)
    guesses.forEach((value, index) => {
      expect(results.at(index).text()).toEqual(value.toString())
    })
  })
})
