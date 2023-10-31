export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        applyMixin(derivedCtor, baseCtor);
    });
}

export function applyMixin(derivedCtor: any, baseCtor: any) {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        if (derivedCtor.prototype.hasOwnProperty(name) && name !== 'constructor') {
            throw new Error(`Method with name ${name} already exists in the derived class`);
        }
        derivedCtor.prototype[name] = baseCtor.prototype[name];
    })
}
