export class Trigger<T> {
    callback: ((data: T) => void)[] = []

    bind(callback: (data: T) => void): void {
        this.callback.push(callback)
    }

    trigger(data: T): void {
        for (let cb of this.callback) {
            cb(data);
        }
    }
}
