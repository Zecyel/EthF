import { createApp } from "@ethf/core";
import { EnvironmentBase, EnvironmentPlugin, createEnvironment, useEnvironment } from "@ethf/event-chain";

let app = createApp([ useEnvironment ])

let env_plg = new EnvironmentPlugin(
    base => class extends base {
        count: number = 0
        foo(): EnvironmentBase {
            this.count ++
            console.log(`Count: ${this.count}`)
            return this
        }
    }
)

declare module '@ethf/event-chain' {
    interface EnvironmentBase {
        count: number
        foo(): EnvironmentBase
    }
}

let env = createEnvironment([ env_plg ])
app.addEnv('counter', env)

app.getEnv('counter').foo().foo().foo()