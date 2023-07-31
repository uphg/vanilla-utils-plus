import isTag from './internal/isTag';

function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return isTag(value, 'WeakMap')
}

export default isWeakMap
