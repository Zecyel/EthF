import { App, createApp, createAppPlugin } from "@ethf/core";

const plugin1 = createAppPlugin(
    base => class extends base {
        a: number = 1
        logA() {
            console.log(`Value a is ${this.a}`)
        }
    }
)

const plugin2 = createAppPlugin(
    base => class extends base {
        b: number = 2
        logB() {
            console.log(`Value b is ${this.b}`)
        }
    }
)

const app = createApp([ plugin1, plugin2 ])
