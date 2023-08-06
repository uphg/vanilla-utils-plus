# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm install vanilla-utils-plus
```

```sh [pnpm]
$ pnpm add vanilla-utils-plus
```

```sh [yarn]
$ yarn add vanilla-utils-plus
```

:::

## 用法

```js
import { useEmitter } from 'vanilla-utils-plus'

const emitter = useEmitter()
emitter.on('say-hi', (params) => {
  console.log(params)
})

emitter.emit('say-hi', 'hello')
```

