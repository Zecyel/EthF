import { XCore } from "./plugin"

class AppBase {}

export const App = XCore<AppBase>
export type App = XCore<AppBase>

export const AppPlugin = XCore<AppBase>
export type AppPlugin = XCore<AppBase>
