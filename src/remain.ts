import isLength from './isLength'

// remain([1, 2, 3, 4, 5], 2, 1)
// => [1, 2, 4, 5]
function remain<T>(
  array: Array<T>,
  start: number,
  deleteCount?: number,
) {
  if (!isLength(start)) return []
  deleteCount = deleteCount || array.length - 1
  const newArray = []
  let index = -1

  while (++index < array.length) {
    if (index >= start && index < start + deleteCount) continue
    newArray.push(array[index])
  }

  return newArray
}

export default remain
