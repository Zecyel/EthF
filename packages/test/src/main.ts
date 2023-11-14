import * as data from "@ethf/data"
import { createDiv, createP } from "@ethf/dom"

let a = new data.XNumber(0)
let b = new data.XNumber(30)

let equ = data.NotEqual(a, b)

let div = createDiv()
let p = createP()

console.log(div)

p.textContent.value = "123"
p.mount(div)

p.onClick.bind(alert)

data.Link(p.visible, equ)

document.getElementById('root').appendChild(div.el)
document.getElementById('button').addEventListener('click', () => {
    a.value += 10
})
