import { Variant } from "../../variant"

type PODEnvironment<T> = {
    oldValue: T,
    newValue: T
}

type PODWrappedType<PlainType> = Variant<PlainType, PODEnvironment<PlainType>>

export type BinaryFunctionType<T> = (lhs: T, rhs: T) => T

export function PODBinaryOperation<PlainType, WrappedType extends PODWrappedType<PlainType>>(
    initialValue: PlainType,
    ctor: new (val: PlainType) => WrappedType,
    op: BinaryFunctionType<PlainType>,
    lhs: WrappedType,
    rhs: WrappedType
): WrappedType {
    let ret = new ctor(initialValue)
    lhs.onChange.bind((_) => {
        ret.value = op(_.newValue, rhs.value)
    })
    rhs.onChange.bind((_) => {
        ret.value = op(lhs.value, _.newValue)
    })
    return ret
}

export type UnaryFunctionType<T> = (arg: T) => T

export function PODUnaryOperation<PlainType, WrappedType extends PODWrappedType<PlainType>>(
    initialValue: PlainType,
    ctor: new (val: PlainType) => WrappedType,
    op: UnaryFunctionType<PlainType>,
    arg: WrappedType
): WrappedType {
    let ret = new ctor(initialValue)
    arg.onChange.bind((_) => {
        ret.value = op(_.newValue)
    })
    return ret
}
