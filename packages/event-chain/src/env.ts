import { AppPlugin, XCore, XPlugin, createInstance } from "@ethf/core"

export class EnvironmentBase {}

export const Environment = XCore<EnvironmentBase>
export type Environment = XCore<EnvironmentBase>

export const EnvironmentPlugin = XPlugin<EnvironmentBase>
export type EnvironmentPlugin = XPlugin<EnvironmentBase>

export function createEnvironment(plugins: EnvironmentPlugin[]): EnvironmentBase {
    return createInstance(EnvironmentBase, plugins)
}

export const useEnvironment = new AppPlugin(
    (base) => class extends base {

        // @ts-ignore
        private env: {
            [key: string]: EnvironmentBase
        } = []

        addEnv(name: string, env: EnvironmentBase): void {
            this.env[name] = env
        }
        getEnv(name: string): EnvironmentBase {
            if (! (name in this.env))
                throw new Error(`Environment ${name} not found`)
            return this.env[name]
        }
    }
)

declare module '@ethf/core' {
    interface AppBase {
        addEnv(name: string, env: EnvironmentBase): void,
        getEnv(name: string): EnvironmentBase
    }
}