import { XNumber } from "./type/number"
import { XBoolean } from "./type/boolean"

export type PODEnvironment<T> = {
    oldValue: T,
    newValue: T
}

export type PODMap<T> =
    T extends number ? XNumber :
    T extends boolean ? XBoolean :
    never

export type PODType = number | boolean
export type PODPromotedType = XNumber | XBoolean