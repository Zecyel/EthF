import { App, AppBase, AppPlugin, createApp } from "@ethf/core"

let plugin1 = new AppPlugin(
    (base) => class extends base {
        c: number = 1
        debugC() {
            console.log(`debug-C ${this.c}`)
        }
    }
)

declare module '@ethf/core' {
    interface AppBase {
        c: number
        debugC(): void
    }
}

let plugin2 = new AppPlugin(
    (base) => class extends base {
        d: number = 3
        debugD() {
            console.log(`debug-D ${this.d}`) 
        }
    }
)

declare module '@ethf/core' {
    interface AppBase {
        d: number
        debugD(): void
    }
}

let app1 = createApp([ plugin1 ])

let app2 = createApp([ plugin2 ])

app1.debugC()
app2.debugD()
app2.debugC() // oh bro that's weird
