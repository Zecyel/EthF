import { XString } from "../type/string";
import { PODBinaryOperation } from "./operation";

export const stringBinaryOperationGenerator = 
    (op: (lhs: string, rhs: string) => string) =>
    (lhs: XString, rhs: XString) =>
    PODBinaryOperation<string, string, string>("", XString, op, lhs, rhs)

export const Concat = stringBinaryOperationGenerator((lhs, rhs) => lhs + rhs)
