import { XNumber } from "./type/number"
import { XBoolean } from "./type/boolean"
import { XString } from "./type/string"

export type PODEnvironment<T> = {
    oldValue: T,
    newValue: T
}

export type PODMap<T> =
    T extends number ? XNumber :
    T extends boolean ? XBoolean :
    T extends string ? XString :
    never

export type PODType = number | boolean | string
export type PODPromotedType = XNumber | XBoolean | XString