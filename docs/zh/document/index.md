# 快速开始

## 安装

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

## 用法

```js
import { useEmitter } from 'peach-utils'

const emitter = useEmitter()
emitter.on('say-hi', (params) => {
  console.log(params)
})

emitter.emit('say-hi', 'hello')
```

