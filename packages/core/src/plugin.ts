type Ctor<T> = new () => T

export class XCore {
    private __EthF_Core_XCore_Signature = '5797E17845D6708B652019649E675D5B'
}

export type XPlugin<Base, T> = (base: Ctor<Base>) => Ctor<T>

export function createPlugin<Base extends XCore, T extends XCore>(
    plugin: XPlugin<Base, T>
): XPlugin<Base, T> {
    return plugin
}

export type MergePlugins<Base, Plugins extends readonly XPlugin<Base, any>[]> =
    Plugins extends readonly [infer P1, ...infer Rest]
    ? P1 extends XPlugin<infer R, infer R1>
        ? R1 extends R
            ? Rest extends XPlugin<any, any>[]
                ? R1 & MergePlugins<Base, Rest>
                : never
            : never
        : never
    : Base

export function createInstance<Base extends XCore, const Plugins extends readonly XPlugin<Base, any>[]>(
    base: Ctor<Base>,
    plugins: Plugins
): MergePlugins<Base, Plugins> {
    let ret = base as Ctor<MergePlugins<Base, Plugins>>
    for (let i of plugins) {
        ret = i(ret)
    }
    return new ret()
}
