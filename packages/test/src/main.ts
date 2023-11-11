import * as data from "@ethf/data"

let a = new data.XNumber(2)
let b = new data.XNumber(3)

let sum = data.Add(a, b);

(sum as data.XNumber).onchange.bind((_) => {
    console.log(`sum is ${_.newValue}`)
})

document.getElementById('button').addEventListener('click', () => {
    a.value += 10;
})