# 数组

## chunk

- **类型**
    
  ```ts
  function chunk<T>(array: T[], size = 1): T[][]
  ```

- **描述**
    
  以指定大小分割数组。

- **示例**

  ```js
  const array = ['a', 'b', 'c', 'd']

  chunk(array, 2)
  // => [['a', 'b'], ['c', 'd']]

  chunk(array, 3)
  // => [['a', 'b', 'c'], ['d']]
  ```

## compact

- **类型**

  ```ts
  function compact<T>(array: T[]): T[]
  ```

- **描述**
    
  创建一个清除所有 falsey 值的数组，falsey 值包括 `false`、`null`、`0`、`""`、`undefined` 和 `NaN`。

- **示例**

  ```js
  compact([0, 1, false, 2, '', 3, NaN, 4, undefined])
  // => [1, 2, 3, 4]
  ```

## flatMap

- **类型**

  ```ts
  function flatMap<T, U = T[]>(
    array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>
  ): RecursiveArray<U>
  ```

- **描述**

  通过调用 callback 函数创建一个新的扁平化的数组，callback 包括三个参数 (value, index|key, array)。

- **示例**

  ```js
  flatMap([1, 2, 3], (item) => [item, item])
  // => [1, 1, 2, 2, 3, 3]
  ```

## flatMapDeep

- **类型**

  ```ts
  function flatMapDeep<T, U>(
    array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>
  ): RecursiveArray<U>
  ```

- **描述**

  该方法与 flatMap 类似，不同的地方是它会递归的展开所有数组。

- **示例**

  ```js
  flatMapDeep([1, 2, 3], (item) => [[[[item, item]]]])
  // => [1, 1, 2, 2, 3, 3]
  ```

## flatten

- **类型**

  ```ts
  function flatten<T>(array: RecursiveArrayLike<T>): T[]
  ```

- **描述**

  返回一个新的扁平化的数组

- **示例**

  ```js
  flatten([[1, 2], [3, 4], [5, [6, 7]]])
  // => [1, 2, 3, 4, 5, [6, 7]]
  ```

## flattenDeep

- **类型**

  ```ts
  function flattenDeep<T>(array: RecursiveArrayLike<T>): T[]
  ```

- **描述**

  该方法与 flatten 类似，不同的地方是它会递归的展开所有数组

- **示例**

  ```js
  flattenDeep([[1, 2], [3, 4], [5, [6, 7]]])
  // => [1, 2, 3, 4, 5, 6, 7]
  ```

## uniq

- **类型**

  ```ts
  function uniq<T>(array: T[]): T[]
  ```

- **描述**

  数组去重，返回一个没有重复值的数组。

- **示例**

  ```js
  uniq([2, 3, 1, 3, 2])
  // => [2, 3, 1]

  uniq([-Infinity, -0, NaN, undefined, -0, NaN, 1, undefined, -Infinity])
  // => [-Infinity, -0, NaN, undefined, 1]
  ```

## indexOf

- **类型**

  ```ts
  function indexOf<T>(array: ArrayLike<T>, value: T, fromIndex?: number): number
  ```

- **描述**

  返回在数组中可以找到一个给定元素的第一个的索引，如果不存在，则返回 -1。可指定 fromIndex，表示从指定索引查询。

- **示例**

  ```js
  const array = ['a', 'b', 'c', 'a']

  indexOf(array, 'b')
  // => 1

  indexOf(array, 'a', 2)
  // => 3
  ```

## lastIndexOf

- **类型**

  ```ts
  function lastIndexOf<T>(array: ArrayLike<T>, value: T, fromIndex?: number): number
  ```

- **描述**

  返回在数组中可以找到一个给定元素的最后一个的索引，如果不存在，则返回 -1。可指定 fromIndex，表示从指定索引查询。

- **示例**

  ```js
  const array = ['a', 'b', 'c', 'a']

  lastIndexOf(array, 'a')
  // => 3

  lastIndexOf(array, 'a', 2)
  // => 0
  ```

## remain

- **类型**

  ```ts
  function remain<T>(array: T[], start: number, deleteCount?: number): T[]
  ```

- **描述**

  根据给定参数分割数组，返回分割后的剩下的部分。

- **示例**

  ```js
  const array = [1, 2, 3, 4, 5]

  remain(array, 2, 2)
  // => [1, 2, 5]

  remain(array, 3)
  // => [1, 2, 3]
  ```

## tail

- **类型**

  ```ts
  function tail<T>(array: T[]): T[]
  ```

- **描述**

  获取除了数组第一个元素外的所有元素。

- **示例**

  ```js
  tail([1, 2, 3])
  // => [2, 3]
  ```
