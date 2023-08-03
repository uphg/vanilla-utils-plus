# Emitter

Create an event publish subscribe object

## Usage

```js
import Emitter from 'small-emitter'
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

Subscribe to an event

```js
const emitter = new Emitter()

emitter.on('foo', (data) => {
  console.log(data)
})
```

## once

`once(name: string, callback: () => void)`

Subscribe to an event only once

```js
const emitter = new Emitter()

emitter.on('foo', (data) => {
  console.log(data)
})
```

## emit

`emit(name: string, ...args: any[])`

Trigger a named event

```js
const emitter = new Emitter()

emitter.on('bar', (message, name) => {
  console.log(`${message}, ${name}`)
})

emitter.emit('bar', 'hi', 'Jack') // hi, Jack
```

## off

`off(name: string, callback?: () => void)`

Clear subscription events

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

Clear all subscribed events

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