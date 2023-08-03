function trimEnd(value: string): string {
  return value.replace(/\s+$/g, '')
}

export default String.prototype.trimEnd ? function(value: string) {
  return String.prototype.trimEnd.call(value)
} : trimEnd
