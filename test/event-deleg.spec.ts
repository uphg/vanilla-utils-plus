import { on, off } from "../src/index"

// "bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
const click = () => new Event('click', { bubbles: true })

describe('delegate event', () => {
  let outer: HTMLDivElement | null
  let inner: HTMLDivElement | null
  beforeEach(() => {
    document.body.innerHTML = `<div class="outer"><div class="inner"></div></div>`
    outer = document.querySelector('.outer') as HTMLDivElement
    inner = document.querySelector('.inner') as HTMLDivElement
  })

  afterEach(() => {
    document.body.innerHTML = ''
    outer = null
    inner = null
  })

  it('once', () => {
    [window, document, outer].forEach((el) => {
      [true, false].forEach((capture) => {
        const fn = jest.fn()
        on(el, 'click', fn, { once: false, capture })
        el?.dispatchEvent(click())
        expect(fn).toHaveBeenCalledTimes(1)
        el?.dispatchEvent(click())
        expect(fn).toHaveBeenCalledTimes(2)

        const onceFn = jest.fn()
        on(el, 'click', onceFn, { once: true, capture })
        el?.dispatchEvent(click())
        expect(onceFn).toHaveBeenCalledTimes(1)
        el?.dispatchEvent(click())
        expect(onceFn).toHaveBeenCalledTimes(1)
      })
    })
  })

  it('Can trigger Window', () => {
    const fn = jest.fn()
    on(window, 'click', fn)
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
    off(window, 'click', fn)
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('Can trigger outer', () => {
    const fn = jest.fn()
    on(window, 'click', fn)
    outer?.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
    off(window, 'click', fn)
    outer?.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('Can trigger inner', () => {
    const fn = jest.fn()
    on(outer, 'click', fn)
    inner?.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
    off(outer, 'click', fn)
    inner?.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('Add duplicate event listeners', () => {
    const fn = jest.fn()
    on(window, 'click', fn)
    on(window, 'click', fn)
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
    off(window, 'click', fn)
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('Remove unlisted functions', () => {
    const fn = jest.fn()
    on(window, 'click', fn)
    on(window, 'click', fn)
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(1)
    off(window, 'click', () => {})
    window.dispatchEvent(click())
    expect(fn).toHaveBeenCalledTimes(2)
    off(window, 'click', fn)
  })

  it('run in the correct sequence in capture mode (1)', () => {
    const array: number[] = []
    if (outer) {
      on(outer, 'click', () => {
        array.push(1)
      }, true)
      on(outer, 'click', () => {
        array.push(2)
      })
      outer.addEventListener('click', () => {
        array.push(3)
      })
    }

    inner?.dispatchEvent(click())
    expect(array).toEqual([1, 2, 3])
  })

  it('run in the correct sequence in capture mode (2)', () => {
    const array: number[] = []
    if (outer) {
      on(outer, 'click', () => {
        array.push(1)
      }, true)
      on(outer, 'click', () => {
        array.push(2)
      })
      outer.addEventListener('click', () => {
        array.push(3)
      })
      outer.dispatchEvent(click())
    }
    expect(array).toEqual([1, 2, 3])
  })
})