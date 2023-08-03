import { trimStart } from '../src/index'

describe('trimStart', () => {
  it('is a function', () => {
    expect(typeof trimStart).toBe('function')
  })

  it('Delete start space', () => {
    expect(trimStart(' 123 ')).toBe('123 ')
    expect(trimStart(`
    hi
    `)).toBe(`hi
    `)
  })
})
