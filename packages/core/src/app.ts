import { UnionToIntersection, XPlugin, createInstance } from "./plugin"

export class App {}

export type AppPlugin<T> = XPlugin<App, T>

export function createApp<T>(plugins: AppPlugin<T>[]): UnionToIntersection<T> {
    return createInstance<App, T>(App, plugins)
}
