import React from 'react'
import { shallow } from 'enzyme'
import { NewPost } from '../../components/NewPost'

let wrapper = shallow(<NewPost />)

test('should render NewPost correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
