import React from 'react'
import { shallow } from 'enzyme'
import { NewCommentButton } from '../../components/comment_button/newCommentButton'

let wrapper = shallow(<NewCommentButton />)

test('should render NewCommentButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
