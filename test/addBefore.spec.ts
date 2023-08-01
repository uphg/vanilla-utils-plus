import { addBefore } from '../src/index'

describe('addBefore', () => {
  let foo: HTMLDivElement | null
  beforeEach(() => {
    document.body.innerHTML = `<div class="foo"></div>`
    foo = document.querySelector('.foo') as HTMLDivElement

  })

  afterEach(() => {
    document.body.innerHTML = ''
    foo = null
  })

  it('is a function', () => {
    expect(typeof addBefore).toBe('function')
  })

  it('add after element', () => {
    const bar = document.createElement('div') as HTMLDivElement
    if (foo) {
      addBefore(foo, bar)
      expect(foo.previousSibling).toBe(bar)
    }
  })
})