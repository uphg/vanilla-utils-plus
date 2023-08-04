import isTag from './internal/isTag';

function isSet<T>(value: unknown): value is Set<T> {
  return isTag(value, 'Set')
}

export default isSet
