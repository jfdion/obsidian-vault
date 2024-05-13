const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T) => fns.reduce((acc, fn) => fn(acc), value);


export function pipe<T, U>(...fns: Array<(arg: T)> => T): (value: T) => U {

}