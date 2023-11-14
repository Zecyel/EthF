import { XPlugin, MergePlugins, createInstance, XCore } from "@ethf/core"

export class Env extends XCore {}

export type EnvPlugin<T> = XPlugin<Env, T>

export function createEnvPlugin<T>(plugin: EnvPlugin<T>): EnvPlugin<T> {
    return plugin
}

export type EnvType<Plugins extends readonly EnvPlugin<any>[]> = MergePlugins<Env, Plugins>

export function createEnv<const Plugins extends readonly EnvPlugin<any>[]>(plugins: Plugins): EnvType<Plugins> {
    return createInstance<Env, Plugins>(Env, plugins)
}
