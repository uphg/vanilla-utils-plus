# Collections

## each

- **type**

  ```ts
  function each<T>(
    obj: ArrayLike<T> | Record<Key, T>, callback: EachCallback<T>
  ): void
  ```

- **description**

  Iterate over the specified array/class array, object, and call callback for each element, callback passing in three parameters currentValue, index, obj. When using an object, it is called sequentially based on each key of the object.

- **example**

  ```js
  each([1, 2, 3], (value, index) => console.log(value))
  // => 1, 2, 3
  
  each({ a: 1, b: 2, c: 3 }, (value, key) => console.log(key))
  // => 'a', 'b', 'c'
  ```

## map

- **type**

  ```ts
  function map<T, U>(
    obj: ArrayLike<T> | Record<Key, T>, callback: MapCallback<T, U>
  ): U[]
  ```

- **description**

  Iterates over the specified array/class array/object and composes a new array return based on the return value of the callback function.

- **example**

  ```js
  map([1, 2, 3], (number) => number * 2)
  // => [2, 4, 6]
  
  map({ a: 1, b: 2, c: 3 }, (value, key) => value * 3)
  // => [3, 6, 9]
  ```

## find

- **type**

  ```ts
  function find<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): T | undefined
  ```

- **description**

  Iterates over the specified array/class array, returning the value of the first item for which the callback function is true.

- **example**

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

- **type**

  ```ts
  funciton findIndex<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): number
  ```

- **description**

  Iterates over the specified array, returning the index of the first item for which the callback function is true.

- **example**

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

- **type**

  ```ts
  funciton findLast<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): T | undefined
  ```

- **description**

  This method is similar to find, except that it iterates over the array from right to left.

- **example**

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

- **type**

  ```ts
  function findLastIndex<T>(
    array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number
  ): number
  ```

- **description**

  This method is similar to findIndex, except that it iterates over the array from right to left.

- **example**

  ```js
  const array = [1, 2, 3, 4, 3, 2, 1]
  
  findLastIndex(array, (item) => item === 3)
  // => 4
  
  findLastIndex(array, (item) => item === 3, 3)
  // => 2
  ```

## includes

- **type**

  ```ts
  function includes<T>(
    array: ArrayLike<T>, value: unknown, fromIndex?: number
  ): boolean
  ```

- **description**

  Check if value is in the collection and return true if found, otherwise return false.

- **example**

  ```js
  includes([1, 2, 3], 1)
  // => true
  
  includes([1, 2, 3], 1, 2)
  // => false
  
  includes([1, 2, NaN, 3], NaN)
  // => true
  ```