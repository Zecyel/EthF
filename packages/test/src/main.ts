import { App, createApp } from "@ethf/core";

const plugin1 =
    base => class extends base {
        a: number = 1
        logA() {
            console.log(`Value a is ${this.a}`)
        }
    }

const app = createApp([ plugin1 ])

app.a = 10
app.logA()