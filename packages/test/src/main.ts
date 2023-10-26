import { Environment, Context } from 'xevent'

let env = new Environment(new Context())

env.next((_) => 5).debug()