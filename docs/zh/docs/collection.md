# 合集

## each

- **类型**

  ```ts
  function each<T>(
    obj: ArrayLike<T> | Record<Key, T>, callback: EachCallback<T>
  ): void
  ```

- **描述**

  迭代指定数组/类数组、对象，并为每个元素调用 callback，callback 传入三个参数 currentValue, index, obj。使用对象时根据对象的每个 key 依次调用。

- **示例**

  ```js
  each([1, 2, 3], (value, index) => console.log(value))
  // => 1, 2, 3

  each({ a: 1, b: 2, c: 3 }, (value, key) => console.log(key))
  // => 'a', 'b', 'c'
  ```

## map

- **类型**

  ```ts
  function map<T, U>(
    obj: ArrayLike<T> | Record<Key, T>, callback: MapCallback<T, U>
  ): U[]
  ```

- **描述**

  迭代指定数组/类数组/对象，并根据 callback 函数的返回值组成一个新的数组返回。

- **示例**

  ```js
  map([1, 2, 3], (number) => number * 2)
  // => [2, 4, 6]

  map({ a: 1, b: 2, c: 3 }, (value, key) => value * 3)
  // => [3, 6, 9]
  ```

## cloneDeep

- **类型**

  ```ts
  function cloneDeep<T>(value: T, count?: { value: number; }): T
  ```

- **描述**

  对指定值进行深度克隆。

- **示例**

  ```js
  const object = [{ a: 1 }, { b: 2 }]

  const object2 = cloneDeep(object)
  console.log(object2[0] === object[0])
  // => false
  ```

## values

- **类型**

  ```ts
  function values(obj: object): any[]
  ```

- **描述**

  返回对象所有 value 组成的数组。

- **示例**

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

- **类型**

  ```ts
  function has(obj: object, key: Key): boolean
  ```

- **描述**

  判断对象的指定属性是否为自身属性。

- **示例**

  ```js
  const object = { a: 1, b: 2 }

  has(object, 'a')
  // => true

  has(object, 'toString')
  // => false
  ```

## hasIn

- **类型**

  ```ts
  function hasIn(obj: unknown, key: string | number): boolean
  ```

- **描述**

  判断对象的指定属性是否为自身或原型的属性。

- **示例**

  ```js
  const object = { a: 1, b: 2 }

  hasIn(object, 'a')
  // => true

  hasIn(object, 'toString')
  // => true
  ```

## pick

- **类型**

  ```ts
  function pick<T extends object>(obj: T, includes: Array<keyof T>): T | {}
  ```

- **描述**

  创建一个由 keys 列表指定的 key 值的对象。

- **示例**

  ```js
  const object = { a: '1', b: 2, c: 3 }

  pick(object, ['a', 'c'])
  // => { a: '1', c: 3 }
  ```

## pickBy

- **类型**

  ```ts
  function pickBy<T extends object>(
    obj: T, callback: PickByCallback<T>, withSymbol?: boolean
  ): T | {}
  ```

- **描述**

  创建一个包含所有 callback return 值为 ture 的组成的新对象，callback 每次调用传入两个参数：value，key。

- **示例**

  ```js
  const object = { a: '1', b: 2, c: 3 }

  pickBy(object, (value) => isNumber)
  // => { b: 2, c: 3 }
  ```

## omit

- **类型**

  ```ts
  function omit<T extends object>(
    obj: T, excludes: Array<keyof T>, withSymbol?: boolean
  ): T | {}
  ```

- **描述**

  与 pick 相反，创建一个除了指定的 keys 列表以外的对象所有 key 组成的新对象。

- **示例**

  ```js
  const object = { a: '1', b: 2, c: 3 }

  pick(object, ['a', 'c'])
  // => { b: 2 }
  ```

## omitBy

- **类型**

  ```ts
  function omitBy<T extends object>(
    obj: T, callback: PickByCallback<T>, withSymbol?: boolean
  ): T | {}
  ```

- **描述**

  与 pickBy 相反，创建一个不包含所有 callback return 值为 ture 的组成的新对象，callback 每次调用传入两个参数：value，key。

- **示例**

  ```js
  const object = { a: '1', b: 2, c: 3 }

  pickBy(object, (value) => isNumber)
  // => { b: 2, c: 3 }
  ```
