import { XCore, XPlugin, createInstance } from "./plugin"

export class AppBase {}

export const App = XCore<AppBase>
export type App = XCore<AppBase>

export const AppPlugin = XPlugin<AppBase>
export type AppPlugin = XPlugin<AppBase>

export function createApp(plugins: AppPlugin[]): AppBase {
    return createInstance(AppBase, plugins)
}
