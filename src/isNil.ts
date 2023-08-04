function isNil(value: unknown): value is null | undefined {
  return value === void 0 || value === null
}

export default isNil
