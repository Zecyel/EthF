import { XBoolean } from "../type/boolean"
import { PODBinaryOperation, PODUnaryOperation } from "./operation"

const binaryOperationGenerator = 
    (op: (lhs: boolean, rhs: boolean) => boolean) =>
    (lhs: XBoolean, rhs: XBoolean) =>
    PODBinaryOperation<boolean, boolean, boolean>(false, XBoolean, op, lhs, rhs)

export const And = binaryOperationGenerator((lhs, rhs) => lhs && rhs)
export const Or = binaryOperationGenerator((lhs, rhs) => lhs || rhs)

const unaryOperationGenerator = 
    (op: (arg: boolean) => boolean) =>
    (arg: XBoolean) =>
    PODUnaryOperation<boolean, boolean>(false, XBoolean, op, arg)

export const Not = unaryOperationGenerator((arg) => !arg)
