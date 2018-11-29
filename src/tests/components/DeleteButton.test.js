import React from 'react'
import { shallow } from 'enzyme'
import { DeleteButton } from '../../components/DeleteButton'

let wrapper = shallow(<DeleteButton />)

test('should render DeleteButton correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
