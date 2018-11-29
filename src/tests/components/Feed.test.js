import React from 'react'
import { shallow } from 'enzyme'
import { Feed } from '../../components/Feed'

let wrapper = shallow(<Feed />)

test('should render Welcome correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
