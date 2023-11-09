import * as data from "@ethf/data"

let a = new data.Number(2)
let b = new data.Number(3)

a.onchange.bind((_) => {
    b.value = _.newValue
})

b.onchange.bind((_) => {
    a.value = _.newValue
})

a.value = 1

document.getElementById('button').addEventListener('click', () => {
    console.log(`a is ${a.value}`)
    console.log(`b is ${b.value}`)
})