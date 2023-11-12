import { XBoolean } from "../type/boolean"
import { XNumber } from "../type/number"
import { PODBinaryOperation, PODUnaryOperation } from "./operation"

export const numberBinaryOperationGenerator = 
    (op: (lhs: number, rhs: number) => number) =>
    (lhs: XNumber, rhs: XNumber) =>
    PODBinaryOperation<number, number, number>(0, XNumber, op, lhs, rhs)

export const Add = numberBinaryOperationGenerator((lhs, rhs) => lhs + rhs)
export const Sub = numberBinaryOperationGenerator((lhs, rhs) => lhs - rhs)
export const Mul = numberBinaryOperationGenerator((lhs, rhs) => lhs * rhs)

export const numberUnaryOperationGenerator = 
    (op: (arg: number) => number) =>
    (arg: XNumber) =>
    PODUnaryOperation<number, number>(0, XNumber, op, arg)

export const Neg = numberUnaryOperationGenerator((arg) => -arg)

export const numberToBoolBinaryOperationGenerator = 
    (op: (lhs: number, rhs: number) => boolean) =>
    (lhs: XNumber, rhs: XNumber) =>
    PODBinaryOperation<number, number, boolean>(false, XBoolean, op, lhs, rhs)

export const Equal = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs === rhs)
export const NotEqual = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs !== rhs)
export const Greater = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs > rhs)
export const GreaterEqual = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs >= rhs)
export const Less = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs < rhs)
export const LessEqual = numberToBoolBinaryOperationGenerator((lhs, rhs) => lhs <= rhs)
