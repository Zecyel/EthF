import { MiddleWare } from "./middleware"

export class Listener<EventType> {
    // constructor (preOper: (e: Context))

    trigger(ev: EventType): void {

    }
    next(m: MiddleWare) {
        
    }
}

export class Event<EventType> {
    listener: Listener<EventType>[]
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
