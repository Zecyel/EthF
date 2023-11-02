import { XCore, XPlugin } from "./plugin"

class AppBase {}

export const App = XCore<AppBase>
export type App = XCore<AppBase>

export const AppPlugin = XPlugin<AppBase>
export type AppPlugin = XPlugin<AppBase>
