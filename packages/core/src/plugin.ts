type Ctor<T> = new () => T

export class XCore<T> {
    constructor (public base: Ctor<T>) {}

    apply(plugin: XPlugin<T>) {
        this.base = plugin.plugin(this.base)
    }

    get(): Ctor<T> {
        return this.base
    }
}

export class XPlugin<T> {
    constructor (public plugin: (base: Ctor<T>) => Ctor<T>) {}
}

export function createInstance<T>(base: Ctor<T>, plugins: XPlugin<T>[]): T {
    let inst = new XCore<T>(base)
    for (let plg of plugins) {
        inst.apply(plg)
    }
    return new (inst.get())
}
