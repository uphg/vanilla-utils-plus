# DOM API

## append

- **类型**

  ```ts
  function append(parent: Node, ...nodes: Node[] | Node[][]): Node
  ```

- **描述**

  在当前元素的子元素后追加元素。

- **示例**

  ```js
  append(document.body, [el1, el2])
  append(document.body, el1, el2, ...elN)
  ```

## prepend

- **类型**

  ```ts
  function prepend(parent: Node, ...nodes: Node[] | Node[][]): Node
  ```
- **描述**

  在当前元素的子元素前追加元素。

- **示例**

  ```js
  prepend(document.body, [el1, el2])
  prepend(document.body, el1, el2, ...elN)
  ```

## addBefore

- **类型**

  ```ts
  function addBefore(el: Node, newNode: Node): Node
  ```

- **描述**

  在当前元素之前添加元素。

- **示例**

  ```js
  addBefore(el, node)
  ```

## addAfter

- **类型**

  ```ts
  function addAfter(el: Node, newNode: Node): Node
  ```

- **描述**

  在当前元素之后添加元素。

- **示例**

  ```js
  addAfter(el, node)
  ```

## getSiblings

- **类型**

  ```ts
  function getSiblings(el: Node): Element[]
  ```

- **描述**

  获取除当前元素之外的所有兄弟元素

- **示例**

  ```js
  getSiblings(el)
  ```

## removeChildren

- **类型**

  ```ts
  function removeChildren(el: Node): void
  ```

- **描述**

  删除当前元素下所有子节点。

- **示例**

  ```js
  removeChildren(el)
  ```

## toElement

- **类型**

  ```ts
  function toElement(innerHTML: string, children?: NodeList | ArrayLike<Node>): Element
  ```

- **描述**

  将字符串内容转为 HTML 节点。

- **示例**

  ```js
  const app = toElement(`
    <div class="app">
      <button id="button">Hi</button>
    </div>
  `)

  append(document.body, app)
  ```

## getScrollbarWidth

- **类型**

  ```ts
  function getScrollbarWidth(): number
  ```

- **描述**

  获取当前页面滚动条宽度。

- **示例**

  ```js
  getScrollbarWidth() // => 17
  ```

## getScrollParent

- **类型**

  ```ts
  function getScrollParent(node: Node): GetScrollParentNode
  ```

- **描述**

  获取当前元素上层的第一个滚动父节点。

- **示例**

  ```js
  getScrollParent(el) // document.body
  ```

## on

- **类型**

  ```ts
  function on<T extends EventDelegElement>(
    el: Node,
    eventName: string,
    selector: string | EventHandler<T>,
    handler?: EventHandler<T> | AddEventDelegOptions,
    options?: AddEventDelegOptions
  ): T | undefined
  ```

- **描述**

  对元素进行事件监听/事件委托。

- **示例**

  ```js
  const app = toElement(`
    <div class="app">
      <button id="button">我是按钮</button>
    </div>
  `)

  const button = app.querySelector('#button')

  const onClick = (e) => {
    console.log(e)
  }

  on(app, 'click', '#button', onClick)
  on(button, 'click', onClick)
  ```

## off

- **类型**

  ```ts
  function off<T extends EventDelegElement>(
    el: Node,
    eventName: string,
    handler: EventHandler<T>,
    options?: EventDelegOptions
  ): T | undefined
  ```

- **描述**

  取消事件监听/事件委托。

- **示例**

  ```js
  off(el, 'click', onClick)
  ```

## addClass

- **类型**

  ```ts
  function addClass(el: Element, ...args: HandleClassParams[]): void
  ```

- **描述**

  给元素添加 class 类名。

- **示例**

  ```js
  addClass(el, 'blue')
  addClass(el, 'a1 a2')
  addClass(el, 'b1', 'b2')

  el.getAttribute('class')
  // => blue a1 a2 b1 b2
  ```

## removeClass

- **类型**

  ```ts
  function removeClass(el: Element, ...args: HandleClassParams[]): void
  ```

- **描述**

  给元素删除 class 类名。

- **示例**

  ```js
  el.classList.add('red', 'blue', 'a1', 'a2', 'b1', 'b2')

  removeClass(el, 'red')
  removeClass(el, 'a1 a2')
  removeClass(el, 'b2', 'b3')

  el.getAttribute('class')
  // => blue
  ```

## hasClass

- **类型**

  ```ts
  function hasClass(el: HTMLElement, className: string): boolean
  ```

- **描述**

  判断元素是否存在 class 类名。

- **示例**

  ```js
  el.classList.add('red', 'blue', 'green')

  hasClass(el, 'red')
  // => true
  ```

## getStyle

- **类型**

  ```ts
  function getStyle(el: HTMLElement, styleName: string): string | null
  ```

- **描述**

  获取元素 style 样式。

- **示例**

  ```js
  el.style.height = '60px'

  getStyle(el, 'height')
  // => 60px
  ```

## setStyle

- **类型**

  ```ts
  function setStyle(
    el: Element, styles: Record<string, string> | string, value?: string
  ): void
  ```

- **描述**

  给元素设置 style 样式。

- **示例**

  ```js
  setStyle(el, {
    marginTop: '20px',
    'margin-bottom': '20px'
  })
  setStyle(el, 'paddingTop', '10px')

  el.getAttribute('style')
  // => margin-top: 20px; margin-bottom: 20px; padding-top: 10px;
  ```

## getIndex

- **类型**

  ```ts
  function getIndex(el: Node | null): number
  ```

- **描述**

  获取当前元素在父元素 children 中的索引，如果元素为空或不存在父元素，会返回 -1。

- **示例**

  ```js
  getIndex(document.body) // 1
  getIndex(null) // -1
  ```

## isServer

- **类型**

  ```ts
  const isServer: boolean
  ```

- **描述**

  获取当前环境是否为服务端（Node.js）

- **示例**

  ```js
  // Node.js
  isServer
  // => true

  // 浏览器
  isServer
  // => false
  ```

## isClient

- **类型**

  ```ts
  const isClient: boolean
  ```

- **描述**

  获取当前环境是否为浏览器。

- **示例**

  ```js
  // Node.js
  isClient
  // => false

  // 浏览器
  isClient
  // => true
  ```