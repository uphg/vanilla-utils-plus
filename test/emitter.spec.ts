import { Emitter } from '../src/index'

describe('emitter', () => {
  it('Emitter is a function', () => {
    expect(typeof Emitter === 'function').toBe(true)
  })

  it('inherited the Emitter instance', () => {
    const emitter = new Emitter()
    expect(emitter).toBeInstanceOf(Emitter)
  })

  it('Objects include on, once, emit, off, and clear methods', () => {
    const eventBus = new Emitter()
    expect(typeof eventBus.on === 'function').toBe(true)
    expect(typeof eventBus.once === 'function').toBe(true)
    expect(typeof eventBus.emit === 'function').toBe(true)
    expect(typeof eventBus.off === 'function').toBe(true)
    expect(typeof eventBus.clear === 'function').toBe(true)
  })

  it('subscribe to an event', () => {
    const emitter = new Emitter()
    const fn = () => {}
    emitter.on('test', fn)
    console.log('# emitter')
    console.log(emitter)
    expect(emitter.events['test']).toEqual([fn])
  })

  it('publish to an event', (done) => {
    const emitter = new Emitter()
    emitter.on('test', () => {
      done()
    })
    emitter.emit('test')
  })

  it('subscribe the event only once', () => {
    const emitter = new Emitter()
    const fn = jest.fn(() => {})
    emitter.once('test', fn)
    emitter.emit('test')
    emitter.emit('test')
    expect(fn.mock.calls.length).toBe(1);
  })

  it('pass in multiple parameters', (done) => {
    const emitter = new Emitter()
    emitter.on('test', (p1, p2) => {
      expect(p1).toBe('hi')
      expect(p2).toBe('hello')
      done()
    })
    emitter.emit('test', 'hi', 'hello')
  })

  it('trigger event multiple times', () => {
    const emitter = new Emitter()
    const mockFn = jest.fn(() => {})
    emitter.on('test', mockFn)
    emitter.emit('test')
    emitter.emit('test')
    emitter.emit('test')
    expect(mockFn.mock.calls.length).toBe(3);
  })

  it('unsubscribe all specified events', () => {
    const emitter = new Emitter()
    const fn1 = jest.fn(() => {})
    const fn2 = jest.fn(() => {})
    emitter.on('test', fn1)
    emitter.on('test', fn2)
    emitter.off('test')
    emitter.emit('test')
    emitter.emit('test')
    expect(fn1.mock.calls.length).toBe(0);
    expect(fn2.mock.calls.length).toBe(0);
  })

  it('the specified function for unsubscribing', () => {
    const emitter = new Emitter()
    const mockFn1 = jest.fn(() => {})
    const mockFn2 = jest.fn(() => {})
    emitter.on('test', mockFn1)
    emitter.on('test', mockFn2)
    emitter.off('test', mockFn1)
    emitter.emit('test')
    expect(mockFn1.mock.calls.length).toBe(0);
    expect(mockFn2.mock.calls.length).toBe(1);
  })

  it('cancel the specified function of multiple subscriptions', () => {
    const emitter = new Emitter()
    const mockFn1 = jest.fn(() => {})
    const mockFn2 = jest.fn(() => {})
    emitter.on('test', mockFn1)
    emitter.on('test', mockFn2)
    emitter.on('test', mockFn1)
    emitter.off('test', mockFn1)
    emitter.emit('test')
    expect(mockFn1.mock.calls.length).toBe(0);
    expect(mockFn2.mock.calls.length).toBe(1);
  })

  it('you can delete itself when the subscribed event is called', (done) => {
    const emitter = new Emitter()
    emitter.on('test', () => {
      expect(emitter.events['test'].length).toBe(1)
      emitter.off('test')
      expect(emitter.events['test']).toBeUndefined()
      done()
    })
    emitter.emit('test')
  })

  it('unsubscribe will also be executed', () => {
    const emitter = new Emitter()
    const mockFn = jest.fn(() => {
      emitter.off('test', mockFn)
    })
    emitter.on('test', mockFn)
    emitter.emit('test')
    expect(mockFn.mock.calls.length).toBe(1)
  })

  it('cancel before adding event, do nothing', (done) => {
    const emitter = new Emitter()
    emitter.off('test', () => {})
    done()
  })

  it('publish events that are not subscribed', (done) => {
    const emitter = new Emitter()
    emitter.emit('test', 'hi')
    done()
  })

  it('cancel an event that is only subscribed once', () => {
    const emitter = new Emitter()
    const mockFn = jest.fn(() => {})
    emitter.once('test', mockFn)
    emitter.off('test', mockFn)
    emitter.emit('test')
    expect(mockFn.mock.calls.length).toBe(0)
  })

  it('on is used together with once', () => {
    const emitter = new Emitter()
    const mockFn = jest.fn(() => {})
    emitter.once('test', mockFn)
    emitter.on('test', mockFn)
    emitter.off('test', mockFn)
    emitter.emit('test')
    expect(mockFn.mock.calls.length).toBe(0)
  })
})

