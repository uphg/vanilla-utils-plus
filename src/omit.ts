import includes from './includes'
import basePickBy from './internal/basePickBy'
import getSymbols from './internal/getSymobls'
import isNil from './isNil'
import keys from './keys'

function omit<T extends object>(obj: T, excludes: Array<keyof T>, withSymbol = false): T | {} {
  if (isNil(obj)) return {}
  const _propNames = keys(obj)
  const propNames = (
    withSymbol
      ? (_propNames as (string | symbol)[]).concat(getSymbols(obj))
      : _propNames
  ) as Array<keyof T>
  return basePickBy(obj, propNames, (_, key) => !includes(excludes, key))
}

export default omit
