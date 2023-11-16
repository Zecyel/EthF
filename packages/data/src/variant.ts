import { Trigger } from "@ethf/trigger"

export interface Variant<T, U> {
    get value(): T
    set value(newValue: T)
    get onChange(): Trigger<U>
}
