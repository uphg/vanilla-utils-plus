import isArguments from '../isArguments'

// See：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
const spreadableSymbol = Symbol.isConcatSpreadable

function isFlattenable(value: unknown) {
  return Array.isArray(value) || isArguments(value) ||
    !!(value as any)?.[spreadableSymbol]
}

export default isFlattenable
