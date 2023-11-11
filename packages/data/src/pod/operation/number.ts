import { XNumber } from "../type/number"
import { BinaryFunctionType, PODBinaryOperation, PODUnaryOperation, UnaryFunctionType } from "./operation"

const NumberBinaryOperation = (op: BinaryFunctionType<number>, lhs: XNumber, rhs: XNumber) =>
    PODBinaryOperation<number, XNumber>(
        0,
        XNumber,
        op, lhs, rhs
    )

const NumberUnaryOperation = (op: UnaryFunctionType<number>, arg: XNumber) =>
    PODUnaryOperation<number, XNumber>(
        0,
        XNumber,
        op, arg
    )

export const Add: BinaryFunctionType<XNumber> = (lhs, rhs) => NumberBinaryOperation((lhs, rhs) => lhs + rhs, lhs, rhs)
export const Sub: BinaryFunctionType<XNumber> = (lhs, rhs) => NumberBinaryOperation((lhs, rhs) => lhs - rhs, lhs, rhs)
export const Mul: BinaryFunctionType<XNumber> = (lhs, rhs) => NumberBinaryOperation((lhs, rhs) => lhs * rhs, lhs, rhs)

export const Neg: UnaryFunctionType<XNumber> = (arg) => NumberUnaryOperation((arg) => -arg, arg)
