import { MergePlugins, XPlugin, createInstance } from "@ethf/core"

export class App {}

export type AppPlugin<T> = XPlugin<App, T>

export function createAppPlugin<T>(plugin: AppPlugin<T>): AppPlugin<T> {
    return plugin
}

export function createApp<const Plugins extends readonly AppPlugin<any>[]>(plugins: Plugins): MergePlugins<App, Plugins> {
    return createInstance<App, Plugins>(App, plugins)
}
