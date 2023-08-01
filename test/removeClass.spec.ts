import { removeClass } from '../src/index'

describe('removeClass', () => {
  let foo: HTMLDivElement | null
  let bar: HTMLDivElement | null
  beforeEach(() => {
    document.body.innerHTML = `<div class="foo"></div><div class="bar"></div>`
    foo = document.querySelector('.foo') as HTMLDivElement
    bar = document.querySelector('.bar') as HTMLDivElement
  })

  afterEach(() => {
    document.body.innerHTML = ''
    foo && (foo.className = '')
    bar && (bar.className = '')
    foo = null
    bar = null
  })

  // it('is a function', () => {
  //   expect(typeof removeClass).toBe('function')
  // })

  // it('remove class', () => {
  //   if (foo) {
  //     foo.className = 'foo p1'
  //     removeClass(foo, 'p1')
  //     expect(foo.className).toBe('foo')
  //   }

  //   if (bar) {
  //     bar.className = 'bar p2'
  //     removeClass(bar, 'p2')
  //     expect(bar.className).toBe('bar')
  //   }
  // })

  // it('remove array class', () => {
  //   if (foo) {
  //     foo.className = 'foo p1 p2 p3 p4 p5 p6'
  //     removeClass(foo, ['p1', 'p2', 'p3'], ['p4', 'p5'], 'p6')
  //     expect(foo.className).toBe('foo')
  //   }
  //   if (bar) {
  //     bar.className = 'bar p1 p2 p3 p4 p5 p6'
  //     removeClass(bar, ['p1', 'p2', 'p3'], ['p4', 'p5'], 'p6')
  //     expect(bar.className).toBe('bar')
  //   }
  // })

  it('remove function return class', () => {
    if (foo) {
      foo.className = 'foo p1 p2 p3 p4 p5'
      removeClass(foo, (className) => {
        expect(className).toBe('foo p1 p2 p3 p4 p5')
        return ['p1', 'p2']
      }, ['p3', 'p4'], 'p5')
      expect(foo.className).toBe('foo')
    }
    if (bar) {
      bar.className = 'bar p1 p2 p3 p4 p5'
      removeClass(bar, (className) => {
        expect(className).toBe('bar p1 p2 p3 p4 p5')
        return 'p1'
      }, ['p2', 'p3', 'p4'], 'p5')
      expect(bar.className).toBe('bar')
    }
  })
})