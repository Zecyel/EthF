import { PODMap, PODType } from "../types"

export type BinaryOperation<
    LhsType extends PODType,
    RhsType extends PODType,
    RetType extends PODType
> = (lhs: LhsType, rhs: RhsType) => RetType

export function PODBinaryOperation<
    LhsType extends PODType,
    RhsType extends PODType,
    RetType extends PODType
>(
    initialValue: RetType,
    ctor: new (val: RetType) => PODMap<RetType>,
    op: BinaryOperation<LhsType, RhsType, RetType>,
    lhs: PODMap<LhsType>,
    rhs: PODMap<RhsType>
): PODMap<RetType> {
    let ret = new ctor(initialValue)
    lhs.onChange.bind((_) => {
        ret.value = op(_.newValue, rhs.value as RhsType)
    })
    rhs.onChange.bind((_) => {
        ret.value = op(lhs.value as LhsType, _.newValue)
    })
    return ret
}

export type UnaryOperation<
    ArgType extends PODType,
    RetType extends PODType
> = (lhs: ArgType) => RetType

export function PODUnaryOperation<
    ArgType extends PODType,
    RetType extends PODType
>(
    initialValue: RetType,
    ctor: new (val: RetType) => PODMap<RetType>,
    op: UnaryOperation<ArgType, RetType>,
    arg: PODMap<ArgType>,
): PODMap<RetType> {
    let ret = new ctor(initialValue)
    arg.onChange.bind((_) => {
        ret.value = op(_.newValue)
    })
    return ret
}
