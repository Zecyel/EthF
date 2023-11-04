export type UnionToIntersection<T> =
    (T extends any ? (arg: T) => any : never) extends
    (arg: infer R) => any ? R : never

type Ctor<T> = new () => T

export type XPlugin<Base, T> = (base: Ctor<Base>) => Ctor<T>

export function createInstance<Base, T>(
    base: Ctor<Base>,
    plugins: XPlugin<Base, T>[]
): UnionToIntersection<T> {
    let ret = base
    for (let i of plugins) {
        // @ts-ignore
        ret = i(ret)
    }
    // @ts-ignore
    return new ret()
}
