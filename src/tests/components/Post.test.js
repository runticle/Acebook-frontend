import React from 'react'
import { shallow } from 'enzyme'
import { Post } from '../../components/Post'

let wrapper = shallow(<Post />)

test('should render Post correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
