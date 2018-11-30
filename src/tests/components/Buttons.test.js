import React from 'react'
import { shallow } from 'enzyme'
import { AllCommentButtons } from '../../components/comment_button/allCommentButtons'

let wrapper = shallow(<AllCommentButtons />)

test('should render Buttons correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
