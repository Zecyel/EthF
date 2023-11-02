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
