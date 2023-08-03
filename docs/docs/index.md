# Getting Started

## Installation

::: code-group

```sh [npm]
$ npm install -D peach-utils
```

```sh [pnpm]
$ pnpm add -D peach-utils
```

```sh [yarn]
$ yarn add -D peach-utils
```

:::

## Usage

```js
import { useEmitter } from 'peach-utils'

const emitter = useEmitter()
emitter.on('say-hi', (params) => {
  console.log(params)
})

emitter.emit('say-hi', 'hello')
```

