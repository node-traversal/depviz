import toTree from './toTree';
import data from './sample-data.json';

it('convert empty data to tree', () => {
    expect(toTree({}, {})).toEqual([]);
});

it('convert omit hidden nodes', () => {
    expect(toTree(data, {
        hidden: {
            react: true
        }
    })).toMatchSnapshot();
});

it('converted nodes with noTraverse must not have dependencies', () => {
    expect(toTree(data, {
        noTraverse: {
            '@examples/simple': true
        }
    })).toMatchSnapshot();
});

it('convert data to tree', () => {
    expect(toTree(data, {})).toMatchSnapshot();
});
