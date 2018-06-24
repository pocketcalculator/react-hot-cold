import React from 'react'
import { shallow } from 'enzyme'

import Feedback from './feedback'

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />)
  })

  it('Renders feedback', () => {
    let TEST_FEEDBACK = '123Test'
    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />)
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true)
  })
})
