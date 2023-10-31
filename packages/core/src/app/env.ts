import { Context } from "./context"
import { MiddleWare } from "./middleware"

export class Environment {

    constructor(public context: Context) {}

    next(op: MiddleWare): Environment {
        this.context.$ = op(this.context)
        return this
    }
}