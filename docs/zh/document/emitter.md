# Emitter

创建一个事件发布订阅对象。

## 用法

```js
import Emitter from 'small-emitter'
// or import { useEmitter } from 'small-emitter'

const emitter = new Emitter();

function fn(p1, p2, p3) {
 // ...
}

// Subscribe to an event
emitter.on('foo', fn);

// Subscribe to an event only once
emitter.once('foo', fn);

// Trigger a named event
emitter.emit('foo', 'p1', 'p2', 'p3');

// Clear subscribed events
emitter.off('foo', fn)

// Clear all subscribed events
emitter.clear()
```

## on

`on(name: string, callback: () => void)`

订阅事件

```js
const emitter = new Emitter()

emitter.on('foo', (data) => {
  console.log(data)
})
```

## once

`once(name: string, callback: () => void)`

仅订阅一次事件

```js
const emitter = new Emitter()

emitter.on('foo', (data) => {
  console.log(data)
})
```

## emit

`emit(name: string, ...args: any[])`

触发指定事件

```js
const emitter = new Emitter()

emitter.on('bar', (message, name) => {
  console.log(`${message}, ${name}`)
})

emitter.emit('bar', 'hi', 'Jack') // hi, Jack
```

## off

`off(name: string, callback?: () => void)`

清除事件订阅

```js
const emitter = new Emitter()

const fn = (message) => {
  console.log(message)
}

emitter.on('bar', fn)
emitter.emit('bar', 'hi') // hi
emitter.off('bar', fn)
emitter.emit('bar', 'Jack') // Not output
```

## clear

`clear()`

清除所有事件订阅

```js
const emitter = new Emitter()

emitter.on('foo', (value) => {
  console.log(value)
})

emitter.on('bar', (value) => {
  console.log(value)
})

emitter.emit('foo', 'hi, foo')
emitter.emit('bar', 'hi, bar')
emitter.clear()
```