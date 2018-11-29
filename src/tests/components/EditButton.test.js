import React from 'react'
import { shallow } from 'enzyme'
import { EditButton } from '../../components/EditButton'

let wrapper = shallow(<EditButton />)

test('should render EditButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
