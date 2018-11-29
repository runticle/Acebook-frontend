import React from 'react'
import { shallow } from 'enzyme'
import { LikeButton } from '../../components/LikeButton'

let wrapper = shallow(<LikeButton />)

test('should render LikeButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
