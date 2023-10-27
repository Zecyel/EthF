import { Context, CurrentValue } from "./context"
import { Environment } from "./env"
import { MiddleWare } from "./middleware"

export class Listener<EventType> {
    constructor (private oper: (env: Environment) => any) {}

    trigger(ev: EventType): void {
        let ctx = new Context()
        let env = new Environment(ctx)
        ctx.$data[CurrentValue] = ev
        this.oper(env)
    }
}

export class Trigger<EventType> {
    listener: Listener<EventType>[] = []
    constructor (binder: (cb: (ev: EventType) => void) => void) {
        binder((ev: EventType) => { this.trigger(ev) })
    }

    addListener(el: Listener<EventType>): void {
        this.listener.push(el)
    }

    removeListener(el: Listener<EventType>): void {
        this.listener = this.listener.filter(e => e !== el)
    }

    trigger(ev: EventType): void {
        for (let i of this.listener) {
            i.trigger(ev)
        }
    }
}
