import React from 'react';
import CodeTree from './CodeTree';
import { shallow } from 'enzyme';
import Dependency from "./Dependency";

it('renders code tree', () => {
    const dependencies = [
        new Dependency('the-node-name', [])
    ];

    const wrapper = shallow(<CodeTree dependencies={dependencies}/>);
    expect(wrapper.debug()).toMatchSnapshot();
});
