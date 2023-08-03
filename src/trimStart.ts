function trimStart(value: string): string {
  return value.replace(/^\s+/g, '')
}

export default String.prototype.trimStart ? function(value: string) {
  return String.prototype.trimStart.call(value)
} : trimStart
