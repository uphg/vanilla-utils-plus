# Getting Started

## Installation

::: code-group

```sh [npm]
$ npm install -D vanilla-utils-plus
```

```sh [pnpm]
$ pnpm add -D vanilla-utils-plus
```

```sh [yarn]
$ yarn add -D vanilla-utils-plus
```

:::

## Usage

```js
import { useEmitter } from 'vanilla-utils-plus'

const emitter = useEmitter()
emitter.on('say-hi', (params) => {
  console.log(params)
})

emitter.emit('say-hi', 'hello')
```

