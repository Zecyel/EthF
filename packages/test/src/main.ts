import { Context, Environment, Trigger } from 'xevent'

let env = new Environment(new Context())

env.next((_) => 5).debug().next((_) => {
    _.init()
}).next((_) => {
    _.count += 10;
}).next((_) => {
    _.print_count();
})

// let ev = new Trigger((e) => {
//     document
//         .getElementById('button')
//         .addEventListener('click', (ev) => {
//             e({
//                 x: ev.clientX,
//                 y: ev.clientY
//             })
//         })
// })

// ev.next((env) => {
//     env.next((_) => {
//         console.log(_.$.x, _.$.y)
//     }).next((_) => 123).debug()
// })
