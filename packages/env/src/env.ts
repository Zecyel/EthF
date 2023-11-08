import { XPlugin, MergePlugins, createInstance } from "@ethf/core"

export class Environment {}

export type EnvironmentPlugin<T> = XPlugin<Environment, T>

export function createEnvironmentPlugin<T>(plugin: EnvironmentPlugin<T>): EnvironmentPlugin<T> {
    return plugin
}

export type EnvironmentType<Plugins extends readonly EnvironmentPlugin<any>[]> = MergePlugins<Environment, Plugins>

export function createEnvironment<const Plugins extends readonly EnvironmentPlugin<any>[]>(plugins: Plugins): EnvironmentType<Plugins> {
    return createInstance<Environment, Plugins>(Environment, plugins)
}
