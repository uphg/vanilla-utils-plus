import { cloneDeep } from '.';

const a = { a: new Set([1, 2, 3]) }
const b = cloneDeep(a)
console.log('b')
console.log(b)
