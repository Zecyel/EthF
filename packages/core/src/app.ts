import { XPlugin, MergePlugins, createInstance } from "./plugin"

export class App { }

export type AppPlugin<T> = XPlugin<App, T>

export function createApp<const Plugins extends readonly AppPlugin<any>[]>(plugins: Plugins): MergePlugins<App, Plugins> {
    return createInstance<App, Plugins>(App, plugins)
}
