import basePickBy from './internal/basePickBy'
import getSymbols from './internal/getSymobls'
import { PickByCallback } from './internal/types'
import isNil from './isNil'
import keys from './keys'

function omitBy<T extends object>(obj: T, callback: PickByCallback<T>, withSymbol = false): T | {} {
  if (isNil(obj)) return {}
  const _propNames = keys(obj)
  const propNames = (
    withSymbol
      ? (_propNames as (string | symbol)[]).concat(getSymbols(obj))
      : _propNames
  ) as Array<keyof T>
  return basePickBy(obj, propNames, (value, key) => !callback(value, key))
}

export default omitBy
