
type AnyFunc = (...args: any) => any;
type PipeArgs<F extends AnyFunc[], Acc extends AnyFunc[] = []> = F extends [
    (...args: infer A) => infer 
] ? [...access, (...args: A) => B]


export function pipe<T, U>(...fns: Array<PipableFn<T, U>>): (value: T) => T | U {
    return (value: T) => fns.reduce((acc, fn) => fn(acc), value);
}