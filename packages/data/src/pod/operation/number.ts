import { MaybeXNumber, XNumber, getValue } from "../type/number"

export function Add(lhs: MaybeXNumber, rhs: MaybeXNumber): MaybeXNumber {
    if (typeof lhs === 'number' && typeof rhs === 'number') {
        return lhs + rhs
    }
    let ret = new XNumber(0)
    if (typeof lhs === 'object') {
        (lhs as XNumber).onchange.bind((_) => {
            ret.value = _.newValue + getValue(rhs)
        })
    }
    if (typeof rhs === 'object') {
        (rhs as XNumber).onchange.bind((_) => {
            ret.value = getValue(lhs) + _.newValue
        })
    }
    return ret
}