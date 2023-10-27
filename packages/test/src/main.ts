import { Environment, Context, Trigger, Listener } from 'xevent'

// let env = new Environment(new Context())

// env.next((_) => 5).debug()

let ev = new Trigger((e) => {
    document
        .getElementById('button')
        .addEventListener('click', (ev) => {
            e({
                x: ev.clientX,
                y: ev.clientY
            })
        })
})

ev.addListener(new Listener((env) => {
    env.next((_) => {
        console.log(_.$.x, _.$.y)
    }).next((_) => 123).debug()
}))
