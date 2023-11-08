import { createEnvironment, createEnvironmentPlugin, createMiddleWare, useChain } from "ethf"

const plugin1 = createEnvironmentPlugin(
    base => class extends base {
        b: number = 20
        printB() {
            console.log(`b = ${this.b}`)
            this.b = 30
        }
    }
)

const plugin2 = createEnvironmentPlugin(
    base => class extends base {
        constructor () {
            super()
        }
    }
)

const instance = createEnvironment([ plugin1, useChain ])

let middleware = createMiddleWare<typeof instance, number>((_) => {
    _.printB()
})

instance.once(middleware).once(middleware).for([1, 2, 3], (_, val) => {
    console.log(val + _.$ as number)
    return val
// }).loop((_) => {
    // console.log("123")
})