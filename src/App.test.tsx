import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders application skeleton', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.debug()).toMatchSnapshot();
});
