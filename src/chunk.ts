import isNil from './isNil';
import toInteger from './toInteger';

function chunk<T>(array: T[], size = 1): T[][] {
  size = Math.max(toInteger(size), 0)
  const length = (isNil(array) ? 0 : array.length)

  if (!length || size < 1) return []

  const result = new Array(Math.ceil(length / size))
  let [index, resIndex] = [0, 0]

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}

export default chunk
