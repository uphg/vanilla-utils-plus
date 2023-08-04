import isTag from './internal/isTag'

function isArray<T>(value: unknown): value is T[] {
  return isTag(value, 'Array')
}

export default Array.isArray ?? isArray
