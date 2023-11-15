import * as data from "@ethf/data"
import { createButton, createDiv, createP } from "@ethf/dom"

const Xsel = data.XPOD<"aaa" | "bbb">
type Xsel = data.XPOD<"aaa" | "bbb">

let foo = new Xsel("aaa")

foo.onChange.bind((_) => {
    console.log(_.newValue)
})

foo.value = "aaa" // won't outpot

foo.value = "bbb"
