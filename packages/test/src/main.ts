import { Environment, Context, Trigger, Listener } from 'xevent'

let env = new Environment(new Context())

env.next((_) => 5).debug()

let ev = new Trigger((e) => {
    document
        .getElementById('button')
        .addEventListener('click', () => {
            e({})
        })
})

ev.addListener(new Listener((env_) => {
    env_.next((_) => 123).debug()
}))
