import React from 'react'
import { shallow } from 'enzyme'
import { NewComment } from '../../components/NewComment'

let wrapper = shallow(<NewComment />)

test('should render NewComment correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
