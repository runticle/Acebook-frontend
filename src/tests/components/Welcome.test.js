import React from 'react'
import { shallow } from 'enzyme'
import { Welcome } from '../../components/Welcome'

let wrapper = shallow(<Welcome />)

test('should render Welcome correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
