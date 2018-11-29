import React from 'react'
import { shallow } from 'enzyme'
import { Register } from '../../components/Register'

let wrapper = shallow(<Register />)

test('should render Register correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
