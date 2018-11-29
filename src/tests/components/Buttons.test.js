import React from 'react'
import { shallow } from 'enzyme'
import { Buttons } from '../../components/Buttons'

let wrapper = shallow(<Buttons />)

test('should render Buttons correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
