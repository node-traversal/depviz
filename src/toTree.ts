import isUndefined from 'lodash/isUndefined';
import forIn from 'lodash/forIn';
import Dependency from "./Dependency";

type TreeOptionsToggles = Record<string, boolean>
type TreeData = Record<string, Dependency>
interface TreeOptions {
    noTraverse?: TreeOptionsToggles;
    hidden?: TreeOptionsToggles;
}

type DataItem = {
    deps: DataDep[];
}

type DataDep = {
    name: string;
}

export default (data: object, options: TreeOptions): Dependency[] => {
    const result: Dependency[] = [];
    const cache: TreeData = {};
    const noTraverse = options.noTraverse || {};
    const hidden = options.hidden || {};
    const shouldTraverse = (key: string): boolean => isUndefined(noTraverse[key]);
    const isVisible = (key: string): boolean => isUndefined(hidden[key]);

    forIn(data, (item: DataItem, key: string) => {
        const node: Dependency = cache[key] || new Dependency(key, []);
        const rawDeps: DataDep[] = item.deps;
        if (rawDeps && shouldTraverse(key)) {
            rawDeps.forEach((dep) => {
                if (isVisible(dep.name)) {
                    let prevDep = cache[dep.name];

                    if (!prevDep) {
                        prevDep = new Dependency(dep.name, []);
                    }

                    node.deps.push(prevDep);
                    cache[dep.name] = prevDep;
                }
            });
        }

        result.push(node);
        cache[key] = node;
    });

    return result;
};