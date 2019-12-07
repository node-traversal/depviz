import React from 'react';
import CodeTreeNodes from './CodeTreeNodes';
import { shallow } from 'enzyme';
import Dependency from "./Dependency";

it('renders empty code-tree nodes', () => {
    const wrapper = shallow(<CodeTreeNodes nodes={[]} path=""/>);
    expect(wrapper.debug()).toMatchSnapshot();
});

it('renders nested code-tree nodes', () => {
    const dependencies = [
        new Dependency('the-node-name', [
            new Dependency('down-stream-node', [])
        ])
    ];

    const wrapper = shallow(<CodeTreeNodes nodes={dependencies} path=""/>);
    expect(wrapper.debug()).toMatchSnapshot();
});

it('renders leaf code-tree nodes', () => {
    const dependencies = [
        new Dependency('the-node-name', [])
    ];

    const wrapper = shallow(<CodeTreeNodes nodes={dependencies} path=""/>);
    expect(wrapper.debug()).toMatchSnapshot();
});

it('renders terminal leaf code-tree nodes', () => {
    const dependencies = [
        new Dependency('the-node-name', [])
    ];

    const wrapper = shallow(<CodeTreeNodes nodes={dependencies} path="@the-package"/>);
    expect(wrapper.debug()).toMatchSnapshot();
});
