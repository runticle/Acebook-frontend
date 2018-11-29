import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

let wrapper = shallow(<Login />)

test('should render Login correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
