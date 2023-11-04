import { createApp, createAppPlugin } from "@ethf/core";
import { EnvironmentPlugin, createEnvironment, createEnvironmentPlugin } from "@ethf/event-chain";

const app_plugin1 = createAppPlugin(
    base => class extends base {
        a: number = 1
        logA() {
            console.log(`Value a is ${this.a}`)
        }
    }
)

const env_plugin1 = createEnvironmentPlugin(
    base => class extends base {
        b: number = 2
        logB() {
            console.log(`Value b is ${this.b}`)
        }
    }
)

const env = createEnvironment([ env_plugin1 ])

const app_plugin2 = createAppPlugin(
    base => class extends base {
        env = env
    }
)

const app = createApp([ app_plugin1, app_plugin2 ])

app.env.b = 10
app.env.logB()

env.b = 20
app.env.logB()