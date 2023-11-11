import { Trigger } from "@ethf/trigger"

export interface Variant<T, U> {
    get value(): T
    set value(newValue: T)
    get onchange(): Trigger<U>
}

export type MaybeVariant<T, U> = T | Variant<T, U>
