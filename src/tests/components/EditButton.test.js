import React from 'react'
import { shallow } from 'enzyme'
import { EditButton } from '../../components/comment_button/editButton'

let wrapper = shallow(<EditButton />)

test('should render EditButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
