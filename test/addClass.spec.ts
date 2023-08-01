import { addClass } from '../src/index'

describe('addClass', () => {
  let foo: HTMLDivElement | null
  let bar: HTMLDivElement | null
  beforeEach(() => {
    document.body.innerHTML = `<div class="foo"></div><div class="bar"></div>`
    foo = document.querySelector('.foo') as HTMLDivElement
    bar = document.querySelector('.bar') as HTMLDivElement
  })

  afterEach(() => {
    document.body.innerHTML = ''
    foo = null
    bar = null
  })

  it('is a function', () => {
    expect(typeof addClass).toBe('function')
  })

  it('add class', () => {
    if (foo) {
      addClass(foo, 'p1')
      expect(foo.className).toBe('foo p1')
    }
    if (bar) {
      addClass(bar, 'p2')
      expect(bar.className).toBe('bar p2')
    }
  })

  it('add array class', () => {
    if (foo) {
      addClass(foo, ['p1', 'p2', 'p3'], ['p4', 'p5'], 'p6')
      expect(foo.className).toBe('foo p1 p2 p3 p4 p5 p6')
    }
    if (bar) {
      addClass(bar, ['p1', 'p2', 'p3'], ['p4', 'p5'], 'p6')
      expect(bar.className).toBe('bar p1 p2 p3 p4 p5 p6')
    }
  })

  it('add function return class', () => {
    if (foo) {
      addClass(foo, (className) => {
        expect(className).toBe('foo')
        return ['p1', 'p2']
      }, ['p3', 'p4'], 'p5')
      expect(foo.className).toBe('foo p1 p2 p3 p4 p5')
    }
    if (bar) {
      addClass(bar, (className) => {
        expect(className).toBe('bar')
        return 'p1'
      }, ['p2', 'p3', 'p4'], 'p5')
      expect(bar.className).toBe('bar p1 p2 p3 p4 p5')
    }
  })
})