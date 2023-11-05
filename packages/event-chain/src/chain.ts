import { createEnvironmentPlugin } from "@ethf/env";

export const useChain = createEnvironmentPlugin(
    base => class extends base {
        currentValue: any = undefined
        next<T>(foo: (_: typeof this, $: T) => any): typeof this {
            this.currentValue = foo(this, this.currentValue)
            return this
        }
    }
)
