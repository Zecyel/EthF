import { createApp, createAppPlugin } from "@ethf/core";
import { createEnvironment } from "@ethf/env";
import { useChain } from "@ethf/event-chain";

const env = createEnvironment([ useChain ])

const app_plugin2 = createAppPlugin(
    base => class extends base {
        env = env
    }
)

const app = createApp([ app_plugin2 ])

app.env.next((_) => 5).next<number>((_, $) => console.log($))