import React from 'react'
import { shallow } from 'enzyme'
import { Navigation } from '../../components/Navigation'

let wrapper = shallow(<Navigation />)

test('should render Navigation correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
