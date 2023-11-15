import * as data from "@ethf/data"
import { createButton, createDiv, createP } from "@ethf/dom"

let a = new data.XNumber(0)
let b = new data.XNumber(30)

let equ = data.NotEqual(a, b)

let div = createDiv()
let p = createP()
let button = createButton()

console.log(div)

p.textContent.value = "123"
p.mount(div)
button.mount(div)
button.textContent.value = "Click me"

p.onClick.bind(alert)

data.Link(p.visible, equ)

button.onClick.bind((_) => {
    a.value += 10
})

document.getElementById('root').appendChild(div.el)

