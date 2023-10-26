import { Context, CurrentValue } from "./context";
import { MiddleWare } from "./middleware";


export class Environment {

    constructor(public context: Context) {}

    next(op: MiddleWare) {
        this.context.$data[CurrentValue] = op(this.context)
        return this
    }
}
