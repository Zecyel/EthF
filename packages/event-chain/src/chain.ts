import { createEnvironmentPlugin } from "@ethf/env";

export type MiddleWare<T, U> = (_: T, $: U) => any

export function createMiddleWare<T, U>(middleware: MiddleWare<T, U>) {
    return middleware
}

export const useChain = createEnvironmentPlugin(
    base => class extends base {

        private currentValue: any = undefined
        private executed: ((_: typeof this, $: any) => any)[] = []

        get $() {
            return this.currentValue
        }

        next<T>(foo: (_: typeof this, $: T) => any): typeof this {
            this.currentValue = foo(this, this.currentValue)
            return this
        }
        once<T>(foo: (_: typeof this, $: T) => any): typeof this {
            if (this.executed.indexOf(foo) === -1) {
                this.currentValue = foo(this, this.currentValue)
                this.executed.push(foo)
            }
            return this
        }
        loop(foo: (_: typeof this) => any): typeof this {
            while (1) {
                this.currentValue = foo(this)
            }
            return this
        }
        for<T>(arr: T[], foo: (_: typeof this, elem: T) => any): typeof this {
            for (let i of arr) {
                this.currentValue = foo(this, i)
            }
            return this
        }
    }
)
