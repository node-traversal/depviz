import * as React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import Dependency from "./Dependency";

type CodeTreeNodesProps = {
    nodes: Dependency[];
    path: string;
}

const CodeTreeNodes: React.FC<CodeTreeNodesProps> = ({nodes, path}) => {
    const elements: React.ReactElement[] = nodes.map((node: Dependency): React.ReactElement => {
        const key = path + '.' + node.name;
        const label = node.name;
        let nodes: React.ReactElement;

        if (node.deps.length > 0) {
            nodes = (
                <TreeItem key={key} nodeId={key} label={label}>
                    <CodeTreeNodes nodes={node.deps} path={key} />
                </TreeItem>
            );
        } else {
            nodes = <TreeItem key={key} nodeId={key} label={label} />;
        }

        return nodes;
    });

    return <React.Fragment>{elements}</React.Fragment>;
};

export default CodeTreeNodes;
