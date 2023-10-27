import { Context, CurrentValue } from "./context"
import { Environment } from "./env"

type Listener = (env: Environment) => any

export class Trigger {
    listener: Listener[] = []
    constructor (binder: (cb: (ev: any) => void) => void) {
        binder((ev) => { this.trigger(ev) })
    }

    next(el: Listener): void {
        this.listener.push(el)
    }

    trigger(ev: any): void {
        for (let i of this.listener) {
            let ctx = new Context()
            let env = new Environment(ctx)
            ctx.$data[CurrentValue] = ev
            i(env)
        }
    }
}
