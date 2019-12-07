export default class Dependency {
    private readonly _name: string;
    private readonly _deps: Dependency[];

    constructor(name: string, deps: Dependency[]) {
        this._name = name;
        this._deps = deps;
    }

    public get name(): string {
        return this._name;
    }

    public get deps(): Dependency[] {
        return this._deps;
    }
}