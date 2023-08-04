import basePickBy from './internal/basePickBy'
import getSymbols from './internal/getSymobls'
import { PickByCallback } from './internal/types'
import isNil from './isNil'
import keys from './keys'

function pickBy<T extends object>(obj: T, callback: PickByCallback<T>, withSymbol = false): T | {} {
  if (isNil(obj)) return {}
  const _propNames = keys(obj)
  const propNames = withSymbol ? (_propNames as (string | symbol)[]).concat(getSymbols(obj)) : _propNames
  return basePickBy(obj, propNames as Array<keyof T>, callback)
}

export default pickBy
