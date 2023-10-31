export const CurrentValue = Symbol('CurrentValue')

export class Context {
  $: any
}

export const view = (foo: (_: Context) => any) => foo
