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


## find

- **类型**

  ```ts
  function find<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): T | undefined
  ```

- **描述**

  迭代指定数组/类数组，返回 callback 函数为 true 的第一项的值。

- **示例**

  ```js
  const users = [
    { id: 1, age: 16, name: 'Jack' },
    { id: 2, age: 20, name: 'Church' },
    { id: 3, age: 22, name: 'Turing' },
    { id: 4, age: 18, name: 'Neumann' }
  ]

  find(users, (user) => user.age > 18)
  // => { id: 2, age: 20, name: 'Church' }
  ```

## findIndex

- **类型**

  ```ts
  funciton findIndex<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): number
  ```

- **描述**

  迭代指定数组，返回 callback 函数为 true 的第一项的 index。

- **示例**

  ```js
  const users = [
    { id: 1, age: 16, name: 'Jack' },
    { id: 2, age: 20, name: 'Church' },
    { id: 3, age: 22, name: 'Turing' },
    { id: 4, age: 18, name: 'Neumann' }
  ]

  findIndex(users, (user) => user.age > 18)
  // => 1
  ```

## findLast

- **类型**

  ```ts
  funciton findLast<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): T | undefined
  ```

- **描述**

  此方法与 find 相似，只不过是从右向左迭代数组。

- **示例**

  ```js
  const users = [
    { id: 1, age: 16, name: 'Jack' },
    { id: 2, age: 20, name: 'Church' },
    { id: 3, age: 22, name: 'Turing' },
    { id: 4, age: 18, name: 'Neumann' }
  ]

  findLast(users, (user) => user.age > 18)
  // => { id: 3, age: 22, name: 'Turing' }
  ```

## findLastIndex

- **类型**

  ```ts
  function findLastIndex<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): number
  ```

- **描述**

  此方法与 findIndex 相似，只不过同样是从右向左迭代数组。

- **示例**

  ```js
  const array = [1, 2, 3, 4, 3, 2, 1]

  findLastIndex(array, (item) => item === 3)
  // => 4

  findLastIndex(array, (item) => item === 3, 3)
  // => 2
  ```

## includes

- **类型**

  ```ts
  function includes<T>(
    array: ArrayLike<T>, value: unknown, fromIndex?: number
  ): boolean
  ```

- **描述**

  检查 value 是否在集合中，如果找到则返回 true，否则返回 false。

- **示例**

  ```js
  includes([1, 2, 3], 1)
  // => true
  
  includes([1, 2, 3], 1, 2)
  // => false

  includes([1, 2, NaN, 3], NaN)
  // => true
  ```