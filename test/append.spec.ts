import { append } from '../src/index'

describe('append', () => {
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
    expect(typeof append).toBe('function')
  })

  it('append child element', () => {
    const foo = document.createElement('div') as HTMLDivElement
    const bar = document.createElement('div') as HTMLDivElement
    if (parent) {
      append(parent, foo)
      expect(parent.children[0]).toBe(foo)
      append(parent, bar)
      expect(foo.nextSibling).toBe(bar)
    }
  })

  it('append array child', () => {
    const foo = document.createElement('div') as HTMLDivElement
    const bar = document.createElement('div') as HTMLDivElement
    if (parent) {
      append(parent, [foo, bar])
      expect(parent.children[0]).toBe(foo)
      expect(parent.children[1]).toBe(bar)
    }
  })
})