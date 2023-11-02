// import { Context, Environment, Trigger } from 'xevent'

// import { Environment, EnvironmentBase, EnvironmentPlugin, XCore, XPlugin } from "@xevent/core";

// let env = new Environment(new Context())

// env.next((_) => 5).debug().next((_) => {
//     _.count += 10;
// }).next((_) => {
//     _.print_count();
// })

// let ev = new Trigger((e) => {
//     document
//         .getElementById('button')
//         .addEventListener('click', (ev) => {
//             e({
//                 x: ev.clientX,
//                 y: ev.clientY
//             })
//         })
// })

// ev.next((env) => {
//     env.next((_) => {
//         console.log(_.$.x, _.$.y)
//     }).next((_) => 123).debug()
// })

// let plg1 = new EnvironmentPlugin(
//     (base) => class extends base {
//         debug() {
//             console.log('debug')
//         }
//     }
// )

// declare module 'xevent' {
//     interface EnvironmentBase {
//         debug(): void
//     }
// }

// let env = new Environment(EnvironmentBase)

// env.apply(plg1)

// let env_inst = new (env.get())

// env_inst.debug()

import { App, AppBase, AppPlugin } from "@xevent/core"

let plugin1 = new AppPlugin(
    (base) => class extends base {
        c: number = 1
        debugC() {
            console.log(`debug-C ${this.c}`)
        }
    }
)

declare module '@xevent/core' {
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

declare module '@xevent/core' {
    interface AppBase {
        d: number
        debugD(): void
    }
}

let app = new App(AppBase)

app.apply(plugin1)
app.apply(plugin2)

let app_inst = new (app.get())

app_inst.debugC()
app_inst.debugD()