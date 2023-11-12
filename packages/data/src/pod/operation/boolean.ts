import { XBoolean } from "../type/boolean"
import { PODBinaryOperation, PODUnaryOperation } from "./operation"

export const booleanBinaryOperationGenerator = 
    (op: (lhs: boolean, rhs: boolean) => boolean) =>
    (lhs: XBoolean, rhs: XBoolean) =>
    PODBinaryOperation<boolean, boolean, boolean>(false, XBoolean, op, lhs, rhs)

export const And = booleanBinaryOperationGenerator((lhs, rhs) => lhs && rhs)
export const Or = booleanBinaryOperationGenerator((lhs, rhs) => lhs || rhs)

export const booleanUnaryOperationGenerator = 
    (op: (arg: boolean) => boolean) =>
    (arg: XBoolean) =>
    PODUnaryOperation<boolean, boolean>(false, XBoolean, op, arg)

export const Not = booleanUnaryOperationGenerator((arg) => !arg)
