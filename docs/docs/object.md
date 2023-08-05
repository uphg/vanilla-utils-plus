# Object

## create

- **type**

  ```ts
  function create(prototype: Object | null, properties?: Object | null): any
  ```

- **description**

  Creates an object that inherits from the specified prototype and, if properties exist, copies the enumerable string key of the properties object itself to the created object.

- **example**

  ```js
  function Foo() {
    this.a = 0;
    this.b = 1;
  }
  
  function Bar() {
    Foo.call(this);
  }
  
  Bar.prototype = create(Foo.prototype, {
    constructor: Bar
  });
  
  const bar = new Bar;
  bar instanceof Bar;
  // => true
  
  bar instanceof Foo;
  // => true
  ```

## values

- **type**

  ```ts
  function values(obj: object): any[]
  ```

- **description**

  Returns an array of all values of an object.

- **example**

  ```js
  function Func() {
    this.a = 1
    this.b = 2
  }
  Func.prototype.c = 3
  const f1 = new Func()
  
  values(f1)
  // => ['a', 'b']
  
  values({ a: 1, b: 2, c: 3 })
  // => [1, 2, 3]
  
  values('hi')
  // => ['h', 'i']
  ```

## has

- **type**

  ```ts
  function has(obj: object, key: Key): boolean
  ```

- **description**

  Determines whether the specified property of an object is its own property.

- **example**

  ```js
  const object = { a: 1, b: 2 }
  
  has(object, 'a')
  // => true
  
  has(object, 'toString')
  // => false
  ```

## hasIn

- **type**

  ```ts
  function hasIn(obj: unknown, key: string | number): boolean
  ```

- **description**

  Determines whether the specified property of an object is itself or a property of the prototype.

- **example**

  ```js
  const object = { a: 1, b: 2 }
  
  hasIn(object, 'a')
  // => true
  
  hasIn(object, 'toString')
  // => true
  ```

## pick

- **type**

  ```ts
  function pick<T extends object>(obj: T, includes: Array<keyof T>): T | {}
  ```

- **description**

  Creates an object with the key value specified by the keys list.

- **example**

  ```js
  const object = { a: '1', b: 2, c: 3 }
  
  pick(object, ['a', 'c'])
  // => { a: '1', c: 3 }
  ```

## pickBy

- **type**

  ```ts
  function pickBy<T extends object>(
    obj: T, callback: PickByCallback<T>, withSymbol?: boolean
  ): T | {}
  ```

- **description**

  Create a new object containing all callback return components with a ture value, and callback passes in two parameters per call: value, key.

- **example**

  ```js
  const object = { a: '1', b: 2, c: 3 }
  
  pickBy(object, (value) => isNumber)
  // => { b: 2, c: 3 }
  ```

## omit

- **type**

  ```ts
  function omit<T extends object>(
    obj: T, excludes: Array<keyof T>, withSymbol?: boolean
  ): T | {}
  ```

- **description**

  In contrast to pick, creates a new object consisting of all keys except the specified list of keys.

- **example**

  ```js
  const object = { a: '1', b: 2, c: 3 }
  
  pick(object, ['a', 'c'])
  // => { b: 2 }
  ```

## omitBy

- **type**

  ```ts
  function omitBy<T extends object>(
    obj: T, callback: PickByCallback<T>, withSymbol?: boolean
  ): T | {}
  ```

- **description**

  In contrast to pickBy, a new object is created that does not contain all callback values of ture, and callback passes in two parameters per call: value, key.

- **example**

  ```js
  const object = { a: '1', b: 2, c: 3 }
  
  pickBy(object, (value) => isNumber)
  // => { b: 2, c: 3 }
  ```