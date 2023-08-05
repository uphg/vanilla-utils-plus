import isNil from '../isNil'

const propertyIsEnumerable = Object.prototype.propertyIsEnumerable

const nativeGetSymbols = Object.getOwnPropertySymbols

function getSymbols<T extends object>(object: T) {
  if (isNil(object)) {
    return []
  }
  object = Object(object)
  return nativeGetSymbols(object).filter((symbol) => propertyIsEnumerable.call(object, symbol))
}

export default getSymbols
