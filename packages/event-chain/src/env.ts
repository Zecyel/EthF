import { AppPlugin, XCore, XPlugin, createInstance } from "@xevent/core"

export class EnvironmentBase {}

export const Environment = XCore<EnvironmentBase>
export type Environment = XCore<EnvironmentBase>

export const EnvironmentPlugin = XPlugin<EnvironmentBase>
export type EnvironmentPlugin = XPlugin<EnvironmentBase>

export function createEnvironment(plugins: EnvironmentPlugin[]): EnvironmentBase {
    return createInstance(EnvironmentBase, plugins)
}

let useEnvironment = new AppPlugin(
    (base) => class extends base {
        // TODO
    }
)

declare module '@xevent/core' {
    interface AppBase {
        
    }
}