import { prepend } from '../src/index'

describe('prepend', () => {
  let parent: HTMLDivElement | null
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="parent"></div>
    `
    parent = document.querySelector('.parent') as HTMLDivElement
  })

  afterEach(() => {
    document.body.innerHTML = ''
    parent = null
  })

  it('is a function', () => {
    expect(typeof prepend).toBe('function')
  })

  it('prepend child elements', () => {
    const foo = document.createElement('div') as HTMLDivElement
    const bar = document.createElement('div') as HTMLDivElement
    if (parent) {
      prepend(parent, bar)
      expect(parent.children[0]).toBe(bar)
      prepend(parent, foo)
      expect(bar.previousSibling).toBe(foo)
    }
  })

  it('prepend array child', () => {
    const foo = document.createElement('div') as HTMLDivElement
    const bar = document.createElement('div') as HTMLDivElement
    if (parent) {
      prepend(parent, [foo, bar])
      expect(parent.children[0]).toBe(bar)
      expect(parent.children[1]).toBe(foo)
    }
  })
})