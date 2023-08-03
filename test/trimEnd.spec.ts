import { trimEnd } from '../src/index'

describe('trimEnd', () => {
  it('is a function', () => {
    expect(typeof trimEnd).toBe('function')
  })

  it('Delete end space', () => {
    expect(trimEnd(' 123 ')).toBe(' 123')
    expect(trimEnd(`
    hi
    `)).toBe(`
    hi`)
  })
})
