import * as data from "@ethf/data"
import { Div, P, appendChild } from "@ethf/dom"

let a = new data.XNumber(0)
let b = new data.XNumber(30)

let equ = data.NotEqual(a, b)

let div = new Div()
let p = new P()
p.textContent.value = "123"
p.mount(div)

data.Link(div.visible, equ)

document.getElementById('root').appendChild(div.el)
document.getElementById('button').addEventListener('click', () => {
    a.value += 10
})
