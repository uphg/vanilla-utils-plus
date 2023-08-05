# Emitter

Create an event publish-subscribe object.

## Basic usage

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

- **type**

  ```ts
  Emitter.on<T extends Function>(name: string, callback: T): void
  ```

- **description**

  Subscribe to events.

- **example**

  ```js
  const emitter = new Emitter()
  
  emitter.on('foo', (data) => {
    console.log(data)
  })
  ```

## once

- **type**

  ```ts
  Emitter.once<T extends Function>(name: string, callback: T): void
  ```

- **description**

  Subscribe to events only once.

- **example**

  ```js
  const emitter = new Emitter()
  
  emitter.on('foo', (data) => {
    console.log(data)
  })
  ```

## emit

- **type**

  ```ts
  Emitter.emit<T extends unknown[]>(name: string, ...args: T): void
  ```

- **description**

  Triggers the specified event.

- **example**

  ```js
  const emitter = new Emitter()
  
  emitter.on('bar', (message, name) => {
    console.log(`${message}, ${name}`)
  })
  
  emitter.emit('bar', 'hi', 'Jack') // hi, Jack
  ```

## off

- **type**

  ```ts
  Emitter.off<T extends Function>(name: string, callback?: T): void
  ```

- **description**

  Clears the specified event subscription.

- **example**

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

- **type**

  ```ts
  Emitter.clear(): void
  ```

- **description**

  Clear all event subscriptions.

- **example**

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