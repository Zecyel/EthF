import { Environment } from "../app";
import { applyMixin } from "../util";

class Debug extends Environment {
    debug(): Environment {
        console.log(`Debug: ${this.context.$}`)
        return this
    }
}

applyMixin(Environment, Debug)

declare module "../app/env" {
    interface Environment {
        debug(): Environment
    }
}
