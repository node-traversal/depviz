import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeTreeNodes from './CodeTreeNodes';
import Dependency from "./Dependency";

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
        'text-align': 'initial'
    },
});

interface CodeTreeProps {
    dependencies: Dependency[];
}

const CodeTree: React.FC<CodeTreeProps> = ({dependencies}) => {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            // defaultExpanded={['a', '5', '6']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}>
            <CodeTreeNodes nodes={dependencies} path="" />
        </TreeView>
    );
};

export default CodeTree;