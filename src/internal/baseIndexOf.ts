function baseIndexOf<T>(array: ArrayLike<T>, value: T, fromIndex: number) {
  let index = fromIndex - 1
  const { length } = array
  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default baseIndexOf
