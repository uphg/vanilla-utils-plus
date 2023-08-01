function trim(value: string): string {
  return value.replace(/^\s+|\s+$/g, '')
}

export default String.prototype.trim ? function(value: string) {
  return String.prototype.trim.call(value)
} : trim
