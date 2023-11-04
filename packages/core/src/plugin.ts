type Ctor<T> = new () => T

export type XPlugin<Base, T> = (base: Ctor<Base>) => Ctor<T>

export function createPlugin<Base, T>(
    plugin: (base: Ctor<Base>) => Ctor<T>
): XPlugin<Base, T> {
    return plugin
}

export type MergePlugins<Base, Plugins extends readonly XPlugin<Base, any>[]> =
    Plugins extends readonly [infer P1, ...infer Rest] ?
    P1 extends XPlugin<any, infer R1> ?
    Rest extends XPlugin<any, any>[] ?
    R1 & MergePlugins<Base, Rest> :
    never :
    never :
    Base

export function createInstance<Base, const Plugins extends readonly XPlugin<Base, any>[]>(
    base: Ctor<Base>,
    plugins: Plugins
): MergePlugins<Base, Plugins> {
    let ret = base as Ctor<MergePlugins<Base, Plugins>>;
    for (let i of plugins) {
        ret = i(ret)
    }
    return new ret()
}
