import React from 'react'
import { shallow } from 'enzyme'
import { Comment } from '../../components/Comment'

let wrapper = shallow(<Comment />)

test('should render Comment correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
