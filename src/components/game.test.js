import React from 'react'
import { shallow } from 'enzyme'

import Game from './game'

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />)
  })
  it('Starts the game', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('guesses')).toEqual([])
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0)
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
  })
  it('Makes guesses', () => {
    const wrapper = shallow(<Game />)
    wrapper.setState({
      correctAnswer: 99
    })
    wrapper.instance().makeGuess(33)
    expect(wrapper.state('guesses')).toEqual([33])
    expect(wrapper.state('correctAnswer')).toEqual(99)
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
    wrapper.instance().makeGuess(88)
    expect(wrapper.state('guesses')).toEqual([33, 88])
    expect(wrapper.state('correctAnswer')).toEqual(99)
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.')
    wrapper.instance().makeGuess(98)
    expect(wrapper.state('guesses')).toEqual([33, 88, 98])
    expect(wrapper.state('correctAnswer')).toEqual(99)
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!')
    wrapper.instance().makeGuess(99)
    expect(wrapper.state('guesses')).toEqual([33, 88, 98, 99])
    expect(wrapper.state('correctAnswer')).toEqual(99)
    expect(wrapper.state('feedback')).toEqual('You got it!')
  })
  it('Makes aural updates', () => {
    const wrapper = shallow(<Game />)

    wrapper.setState({
      correctAnswer: 99
    })

    wrapper.instance().makeGuess(1)
    wrapper.instance().makeGuess(45)
    wrapper.instance().makeGuess(95)

    wrapper.instance().generateAuralUpdate()

    expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Hot! You\'ve made 3 guesses. In order of most- to least-recent, they are: 95, 45, 1')
  })
})
