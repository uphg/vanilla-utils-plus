import isArray from '../isArray'
import isString from '../isString'
import isFunction from '../isFunction'
import { HandleClassParams, HandleClassCallback } from './types'

function handleClassParams(el: Element, ...args: HandleClassParams[]) {
  let result: string[] = []
  args.forEach((item) => {
    if (isString(item)) {
      result.push(item)
    } else if (isArray(item)) {
      result = result.concat(handleClassParams(el, ...item))
    } else if (isFunction(item)) {
      const returnClass = (item as HandleClassCallback)(el.className)
      result = result.concat(handleClassParams(el, returnClass))
    }
  })

  return result 
}

export default handleClassParams
