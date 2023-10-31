import { Context, applyMixin } from ".."

class Count {
    count: number

    init() {
        this.count = 1;
    }

    print_count() {
        console.log(`Count: ${this.count}`)
    }
}

applyMixin(Context, Count)

declare module "../app/context" {
    interface Context {
        count: number
        init(): void
        print_count(): void
    }
}
