function isTag(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export default isTag
