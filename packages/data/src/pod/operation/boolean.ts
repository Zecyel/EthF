import { XBoolean } from "../type/boolean"
import { BinaryFunctionType, PODBinaryOperation, PODUnaryOperation, UnaryFunctionType } from "./operation"

const BooleanBinaryOperation = (op: BinaryFunctionType<boolean>, lhs: XBoolean, rhs: XBoolean) =>
    PODBinaryOperation<boolean, XBoolean>(
        false,
        XBoolean,
        op, lhs, rhs
    )

const BooleanUnaryOperation = (op: UnaryFunctionType<boolean>, arg: XBoolean) =>
    PODUnaryOperation<boolean, XBoolean>(
        false,
        XBoolean,
        op, arg
    )

export const And: BinaryFunctionType<XBoolean> = (lhs, rhs) => BooleanBinaryOperation((lhs, rhs) => lhs && rhs, lhs, rhs)
export const Or: BinaryFunctionType<XBoolean> = (lhs, rhs) => BooleanBinaryOperation((lhs, rhs) => lhs || rhs, lhs, rhs)

export const Not: UnaryFunctionType<XBoolean> = (arg) => BooleanUnaryOperation((arg) => !arg, arg)
