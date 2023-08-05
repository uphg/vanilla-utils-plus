# array

## chunk

- **type**

  ```ts
  function chunk<T>(array: T[], size = 1): T[][]
  ```

- **description**

  Split the array to the specified size.

- **example**

  ```js
  const array = ['a', 'b', 'c', 'd']
  
  chunk(array, 2)
  // => [['a', 'b'], ['c', 'd']]
  
  chunk(array, 3)
  // => [['a', 'b', 'c'], ['d']]
  ```

## compact

- **type**

  ```ts
  function compact<T>(array: T[]): T[]
  ```

- **description**

  Create an array that clears all false values, including `false` , `null` `0` `""` `undefined` and `NaN` .

- **example**

  ```js
  compact([0, 1, false, 2, '', 3, NaN, 4, undefined])
  // => [1, 2, 3, 4]
  ```

## flatMap

- **type**

  ```ts
  function flatMap<T, U = T[]>(
    array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>
  ): RecursiveArray<U>
  ```

- **description**

  Create a new flattened array by calling the callback function, which includes three parameters (value, index|key, array).

- **example**

  ```js
  flatMap([1, 2, 3], (item) => [item, item])
  // => [1, 1, 2, 2, 3, 3]
  ```

## flatMapDeep

- **type**

  ```ts
  function flatMapDeep<T, U>(
    array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>
  ): RecursiveArray<U>
  ```

- **description**

  This method is similar to flatMap, except that it expands all arrays recursively.

- **example**

  ```js
  flatMapDeep([1, 2, 3], (item) => [[[[item, item]]]])
  // => [1, 1, 2, 2, 3, 3]
  ```

## flatten

- **type**

  ```ts
  function flatten<T>(array: RecursiveArrayLike<T>): T[]
  ```

- **description**

  Returns a new, flattened array

- **example**

  ```js
  flatten([[1, 2], [3, 4], [5, [6, 7]]])
  // => [1, 2, 3, 4, 5, [6, 7]]
  ```

## flattenDeep

- **type**

  ```ts
  function flattenDeep<T>(array: RecursiveArrayLike<T>): T[]
  ```

- **description**

  This method is similar to flatten, except that it expands all arrays recursively

- **example**

  ```js
  flattenDeep([[1, 2], [3, 4], [5, [6, 7]]])
  // => [1, 2, 3, 4, 5, 6, 7]
  ```

## uniq

- **type**

  ```ts
  function uniq<T>(array: T[]): T[]
  ```

- **description**

  Array deduplication, returning an array with no duplicate values.

- **example**

  ```js
  uniq([2, 3, 1, 3, 2])
  // => [2, 3, 1]
  
  uniq([-Infinity, -0, NaN, undefined, -0, NaN, 1, undefined, -Infinity])
  // => [-Infinity, -0, NaN, undefined, 1]
  ```

## indexOf

- **type**

  ```ts
  function indexOf<T>(array: ArrayLike<T>, value: T, fromIndex?: number): number
  ```

- **description**

  Returns the index of the first where a given element can be found in the array, or -1 if it does not exist. You can specify fromIndex, which means to query from the specified index.

- **example**

  ```js
  const array = ['a', 'b', 'c', 'a']
  
  indexOf(array, 'b')
  // => 1
  
  indexOf(array, 'a', 2)
  // => 3
  ```

## lastIndexOf

- **type**

  ```ts
  function lastIndexOf<T>(array: ArrayLike<T>, value: T, fromIndex?: number): number
  ```

- **description**

  Returns the index of the last given element that could be found in the array, or -1 if it does not exist. You can specify fromIndex, which means to query from the specified index.

- **example**

  ```js
  const array = ['a', 'b', 'c', 'a']
  
  lastIndexOf(array, 'a')
  // => 3
  
  lastIndexOf(array, 'a', 2)
  // => 0
  ```

## remain

- **type**

  ```ts
  function remain<T>(array: T[], start: number, deleteCount?: number): T[]
  ```

- **description**

  Splitting the array according to the given parameters, returns the rest after the split.

- **example**

  ```js
  const array = [1, 2, 3, 4, 5]
  
  remain(array, 2, 2)
  // => [1, 2, 5]
  
  remain(array, 3)
  // => [1, 2, 3]
  ```

## tail

- **type**

  ```ts
  function tail<T>(array: T[]): T[]
  ```

- **description**

  Gets all elements except the first element of the array.

- **example**

  ```js
  tail([1, 2, 3])
  // => [2, 3]
  ```