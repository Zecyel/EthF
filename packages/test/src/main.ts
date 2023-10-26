import { Environment, Context } from 'xevent'

let env = new Environment(new Context())

env.next((_) => 5).next((_) => console.log(_.$))