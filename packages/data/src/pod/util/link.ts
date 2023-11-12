import { PODPromotedType } from "../types";

export function Link<T extends PODPromotedType>(arg1: T, arg2: T) {
    arg1.onChange.bind((_) => {
        arg2.value = arg1.value
    })

    arg2.onChange.bind((_) => {
        arg1.value = arg2.value
    })
}
