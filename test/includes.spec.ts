import { includes } from '../src/index'

describe('includes', () => {
  it('is a function', () => {
    expect(typeof includes).toBe('function')
  })

  it('Iterate the array', () => {
    const array = [2, 5, 9]
    const nanArray = [1, 2, NaN, 3]
    expect((includes(array, 2))).toBeTruthy()
    expect((includes(array, 2, 1))).toBeFalsy()
    expect((includes(nanArray, NaN))).toBeTruthy()
  })
})
