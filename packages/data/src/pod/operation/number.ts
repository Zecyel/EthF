import { XNumber } from "../type/number"
import { PODBinaryOperation, PODUnaryOperation } from "./operation"

const binaryOperationGenerator = 
    (op: (lhs: number, rhs: number) => number) =>
    (lhs: XNumber, rhs: XNumber) =>
    PODBinaryOperation<number, number, number>(0, XNumber, op, lhs, rhs)

export const Add = binaryOperationGenerator((lhs, rhs) => lhs + rhs)
export const Sub = binaryOperationGenerator((lhs, rhs) => lhs - rhs)
export const Mul = binaryOperationGenerator((lhs, rhs) => lhs * rhs)

const unaryOperationGenerator = 
    (op: (arg: number) => number) =>
    (arg: XNumber) =>
    PODUnaryOperation<number, number>(0, XNumber, op, arg)

export const Neg = unaryOperationGenerator((arg) => -arg)
