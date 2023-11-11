import { XNumber } from "../type/number"

export function BinaryOperation(
    op: (a: number, b: number) => number,
    lhs: XNumber,
    rhs: XNumber
): XNumber {
    let ret = new XNumber(0)
    lhs.onchange.bind((_) => {
        ret.value = op(_.newValue, rhs.value)
    })
    rhs.onchange.bind((_) => {
        ret.value = op(lhs.value, _.newValue)
    })
    return ret
}

export type BinaryOperationType = (lhs: XNumber, rhs: XNumber) => XNumber

export const Add: BinaryOperationType = (lhs, rhs) => BinaryOperation((a, b) => a + b, lhs, rhs)
export const Sub: BinaryOperationType = (lhs, rhs) => BinaryOperation((a, b) => a - b, lhs, rhs)
export const Mul: BinaryOperationType = (lhs, rhs) => BinaryOperation((a, b) => a * b, lhs, rhs)
