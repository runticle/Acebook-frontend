import React from 'react'
import { shallow } from 'enzyme'
import { LikeButton } from '../../components/comment_button/likeButton'

let wrapper = shallow(<LikeButton />)

test('should render LikeButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
