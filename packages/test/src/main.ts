import * as data from "@ethf/data"

let a = new data.XNumber(2)
let b = new data.XNumber(3)

let sum = data.Add(a, b)
let neg = data.Neg(sum)

neg.onChange.bind((_) => {
    console.log(`neg is ${_.newValue}`)
})

document.getElementById('button').addEventListener('click', () => {
    a.value += 10;
})
