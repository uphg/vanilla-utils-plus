# DOM API

## append

- **type**

  ```ts
  function append(parent: Node, ...nodes: Node[] | Node[][]): Node
  ```

- **description**

  Appends an element after a child element of the current element.

- **example**

  ```js
  append(document.body, [el1, el2])
  append(document.body, el1, el2, ...elN)
  ```

## prepend

- **type**

  ```ts
  function prepend(parent: Node, ...nodes: Node[] | Node[][]): Node
  ```

- **description**

  Appends an element before the child elements of the current element.

- **example**

  ```js
  prepend(document.body, [el1, el2])
  prepend(document.body, el1, el2, ...elN)
  ```

## addBefore

- **type**

  ```ts
  function addBefore(el: Node, newNode: Node): Node
  ```

- **description**

  Adds an element before the current element.

- **example**

  ```js
  addBefore(el, node)
  ```

## addAfter

- **type**

  ```ts
  function addAfter(el: Node, newNode: Node): Node
  ```

- **description**

  Adds an element after the current element.

- **example**

  ```js
  addAfter(el, node)
  ```

## getSiblings

- **type**

  ```ts
  function getSiblings(el: Node): Element[]
  ```

- **description**

  Gets all sibling elements except the current element

- **example**

  ```js
  getSiblings(el)
  ```

## removeChildren

- **type**

  ```ts
  function removeChildren(el: Node): void
  ```

- **description**

  Deletes all child nodes under the current element.

- **example**

  ```js
  removeChildren(el)
  ```

## toElement

- **type**

  ```ts
  function toElement(innerHTML: string, children?: NodeList | ArrayLike<Node>): Element
  ```

- **description**

  Convert string content into HTML nodes.

- **example**

  ```js
  const app = toElement(`
    <div class="app">
      <button id="button">Hi</button>
    </div>
  `)
  
  append(document.body, app)
  ```

## getScrollbarWidth

- **type**

  ```ts
  function getScrollbarWidth(): number
  ```

- **description**

  Gets the current page scroll bar width.

- **example**

  ```js
  getScrollbarWidth() // => 17
  ```

## getScrollParent

- **type**

  ```ts
  function getScrollParent(node: Node): GetScrollParentNode
  ```

- **description**

  Gets the first rolling parent node above the current element.

- **example**

  ```js
  getScrollParent(el) // document.body
  ```

## on

- **type**

  ```ts
  function on<T extends EventDelegElement>(
    el: Node,
    eventName: string,
    selector: string | EventHandler<T>,
    handler?: EventHandler<T> | AddEventDelegOptions,
    options?: AddEventDelegOptions
  ): T | undefined
  ```

- **description**

  Event listeners/event delegates for elements.

- **example**

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

- **type**

  ```ts
  function off<T extends EventDelegElement>(
    el: Node,
    eventName: string,
    handler: EventHandler<T>,
    options?: EventDelegOptions
  ): T | undefined
  ```

- **description**

  Cancel event listeners/event delegates.

- **example**

  ```js
  off(el, 'click', onClick)
  ```

## addClass

- **type**

  ```ts
  function addClass(el: Element, ...args: HandleClassParams[]): void
  ```

- **description**

  Add the class class name to the element.

- **example**

  ```js
  addClass(el, 'blue')
  addClass(el, 'a1 a2')
  addClass(el, 'b1', 'b2')
  
  el.getAttribute('class')
  // => blue a1 a2 b1 b2
  ```

## removeClass

- **type**

  ```ts
  function removeClass(el: Element, ...args: HandleClassParams[]): void
  ```

- **description**

  Remove the class class name from the element.

- **example**

  ```js
  el.classList.add('red', 'blue', 'a1', 'a2', 'b1', 'b2')
  
  removeClass(el, 'red')
  removeClass(el, 'a1 a2')
  removeClass(el, 'b2', 'b3')
  
  el.getAttribute('class')
  // => blue
  ```

## hasClass

- **type**

  ```ts
  function hasClass(el: HTMLElement, className: string): boolean
  ```

- **description**

  Determines whether the class class name exists for the element.

- **example**

  ```js
  el.classList.add('red', 'blue', 'green')
  
  hasClass(el, 'red')
  // => true
  ```

## getStyle

- **type**

  ```ts
  function getStyle(el: HTMLElement, styleName: string): string | null
  ```

- **description**

  Gets the element style style.

- **example**

  ```js
  el.style.height = '60px'
  
  getStyle(el, 'height')
  // => 60px
  ```

## setStyle

- **type**

  ```ts
  function setStyle(
    el: Element, styles: Record<string, string> | string, value?: string
  ): void
  ```

- **description**

  Style the element.

- **example**

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

- **type**

  ```ts
  function getIndex(el: Node | null): number
  ```

- **description**

  Gets the index of the current element in the parent element children, returning -1 if the element is empty or no parent element exists.

- **example**

  ```js
  getIndex(document.body) // 1
  getIndex(null) // -1
  ```

## isServer

- **type**

  ```ts
  const isServer: boolean
  ```

- **description**

  Get whether the current environment is a server (Node.js

- **example**

  ```js
  // Node.js
  isServer
  // => true
  
  // 浏览器
  isServer
  // => false
  ```

## isClient

- **type**

  ```ts
  const isClient: boolean
  ```

- **description**

  Gets whether the current environment is a browser.

- **example**

  ```js
  // Node.js
  isClient
  // => false
  
  // 浏览器
  isClient
  // => true
  ```