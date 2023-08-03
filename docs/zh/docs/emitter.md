# Emitter

创建一个事件发布订阅对象。

## 基础用法

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

- **类型**

  ```ts
  Emitter.on<T extends Function>(name: string, callback: T): void
  ```

- **描述**

  订阅事件。

- **示例**

  ```js
  const emitter = new Emitter()

  emitter.on('foo', (data) => {
    console.log(data)
  })
  ```

## once

- **类型**

  ```ts
  Emitter.once<T extends Function>(name: string, callback: T): void
  ```

- **描述**

  仅订阅一次事件。

- **示例**

  ```js
  const emitter = new Emitter()

  emitter.on('foo', (data) => {
    console.log(data)
  })
  ```

## emit

- **类型**

  ```ts
  Emitter.emit<T extends unknown[]>(name: string, ...args: T): void
  ```

- **描述**

  触发指定事件。

- **示例**

  ```js
  const emitter = new Emitter()

  emitter.on('bar', (message, name) => {
    console.log(`${message}, ${name}`)
  })

  emitter.emit('bar', 'hi', 'Jack') // hi, Jack
  ```

## off

- **类型**

  ```ts
  Emitter.off<T extends Function>(name: string, callback?: T): void
  ```

- **描述**

  清除指定事件订阅。

- **示例**

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

- **类型**

  ```ts
  Emitter.clear(): void
  ```

- **描述**

  清除所有事件订阅。

- **示例**

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