import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../../components/Home'

let wrapper = shallow(<Home />)

test('should render Home correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
