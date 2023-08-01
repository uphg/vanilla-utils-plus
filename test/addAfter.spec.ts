import { addAfter } from '../src/index'

describe('addAfter', () => {
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
    expect(typeof addAfter).toBe('function')
  })

  it('add after element', () => {
    const bar = document.createElement('div') as HTMLDivElement
    if (foo) {
      addAfter(foo, bar)
      expect(foo.nextSibling).toBe(bar)
    }
  })
})