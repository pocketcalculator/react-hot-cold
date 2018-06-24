import React from 'react'
import {shallow, mount} from 'enzyme'

import Header from './top-nav'

describe('<nav />', () => {
  it('Renders without crashing', () => {
    shallow(<nav />)
  })
})
