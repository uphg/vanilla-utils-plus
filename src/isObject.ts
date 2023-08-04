function isObject(value: unknown): value is object {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

const b = 'hi'

const a = b

if (isObject(a)) {
  console.log(a)
}

export default isObject
