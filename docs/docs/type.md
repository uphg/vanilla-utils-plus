# type

## cloneDeep

- **type**

  ```ts
  function cloneDeep<T>(value: T, count?: { value: number; }): T
  ```

- **description**

  Deep clones of the specified value.

- **example**

  ```js
  const object = [{ a: 1 }, { b: 2 }]
  
  const object2 = cloneDeep(object)
  console.log(object2[0] === object[0])
  // => false
  ```

## eq

- **type**

  ```ts
  function eq(value: unknown, other: unknown): boolean
  ```

- **description**

  Determines whether two values are the same value.

- **example**

  ```js
  eq(NaN, NaN)
  // => true
  
  eq(-0, -0)
  // => true
  
  eq(Infinity, -Infinity)
  // => false
  
  eq(-0, +0)
  // => false
  ```

## toFinite

- **type**

  ```ts
  function toFinite(value: unknown): number
  ```

- **description**

  value to finite number.

- **example**

  ```js
  toFinite(6.2)
  // => 6.2
  
  toFinite(Number.MIN_VALUE)
  // => 5e-324
  
  toFinite(Infinity)
  // => 1.7976931348623157e+308
  
  toFinite('6.2')
  // => 6.2
  ```

## toInteger

- **type**

  ```ts
  function toInteger(value: unknown): number
  ```

- **description**

  value to integer.

- **example**

  ```js
  toInteger(6.2)
  // => 6
  
  toInteger(Number.MIN_VALUE)
  // => 0
  
  toInteger(Infinity)
  // => 1.7976931348623157e+308
  
  toInteger('6.2')
  // => 6
  ```

## toLength

- **type**

  ```ts
  function toLength(value?: unknown): number
  ```

- **description**

  Converts value to an integer that conforms to the length of the array's length property.

- **example**

  ```js
  toLength(6.2)
  // => 6
  
  toLength(Number.MIN_VALUE)
  // => 0
  
  toLength(Infinity)
  // => 4294967295
  
  toLength('6.2')
  // => 6
  ```

## toNumber

- **type**

  ```ts
  function toNumber(value: any): number
  ```

- **description**

  value to number.

- **example**

  ```js
  toNumber(6.2)
  // => 6.2
  
  toNumber(Number.MIN_VALUE)
  // => 5e-324
  
  toNumber(Infinity)
  // => Infinity
  
  toNumber('6.2')
  // => 6.2
  ```

## toArray

- **type**

  ```ts
  function toArray<T>(value: any): T[] | string[]
  ```

- **description**

  value to array.

- **example**

  ```js
  toArray({ 0: 'a', 1: 'b' })
  // => ['a', 'b']
  
  toArray('hi')
  // => ['h', 'i']
  
  toArray(1)
  // => []
  
  toArray(null)
  // => []
  ```

## isBoolean

- **type**

  ```ts
  function isBoolean(value: unknown): value is boolean
  ```

- **description**

  Detects whether value is a Boolean value.

- **example**

  ```js
  isBoolean(NaN)
  // => false
  
  isBoolean(true)
  // => true
  
  isBoolean(new Boolean(false))
  // => false
  ```

## isString

- **type**

  ```ts
  function isString(value: unknown): value is string
  ```

- **description**

  Detects whether value is of type string.

- **example**

  ```js
  isString(1)
  // => false
  
  isString('hi')
  // => true
  ```

## isNumber

- **type**

  ```ts
  function isNumber(value: unknown): value is number
  ```

- **description**

  Detects whether value is a numeric type.

- **example**

  ```js
  isNumber(1)
  // => true
  
  isNumber(NaN)
  // => true
  
  isNumber(Infinity)
  // => true
  ```

## isBigInt

- **type**

  ```ts
  function isBigInt(value: unknown): value is BigInt
  ```

- **description**

  Detects whether value is of type BigInt.

- **example**

  ```js
  const bigInt = BigInt("9007199254740991")
  
  isBigInt(bigInt)
  // => true
  
  isBigInt(1)
  // => false
  
  isBigInt(NaN)
  // => false
  ```

## isSymbol

- **type**

  ```ts
  function isSymbol(value: unknown): value is symbol
  ```

- **description**

  Detects whether value is of type Symobl.

- **example**

  ```js
  isSymbol(Symbol())
  // true
  
  isSymbol('hi')
  // false
  ```

## isFunction

- **type**

  ```ts
  function isFunction(value: unknown): value is Function
  ```

- **description**

  Detects whether value is a function.

- **example**

  ```js
  isFunction(() => {})
  // true
  
  isFunction(class Foo {})
  // true
  
  isFunction(async () => {})
  // true
  
  isFunction(function* foo() {})
  // true
  
  isFunction({})
  // false
  ```

## isObject

- **type**

  ```ts
  function isObject(value: unknown): value is object
  ```

- **description**

  Detects whether value is of type Object, such as: array, function, object, regular expression, `new Number(0)` and `new String('')` .

- **example**

  ```js
  isObject({})
  // => true
  
  isObject([])
  // => true
  
  isObject(Function)
  // => true
  
  isObject(null)
  // => false
  ```

## isObjectLike

- **type**

  ```ts
  function isObjectLike(value: unknown): value is object
  ```

- **description**

  Detects whether value is an object-like structure, and if the value is not , `null` and the result of typeof is , the value is `'object'` object-like.

- **example**

  ```js
  isObjectLike({})
  // => true
  
  isObjectLike([])
  // => true
  
  isObjectLike(Function)
  // => false
  
  isObjectLike(null)
  // => false
  ```

## isArray

- **type**

  ```ts
  function isArray(value: unknown): value is unknown[]
  ```

- **description**

  Detects whether value is an array.

- **example**

  ```js
  isArray([])
  // => true
  
  isArray({})
  // => false
  
  isArray('hi')
  // => false
  
  isArray(null)
  // => false
  ```

## isArrayLike

- **type**

  ```ts
  function isArrayLike(value: unknown): value is string | unknown[]
  ```

- **description**

  Detects whether value is an array of classes, if the value is not a function and value.length is an integer greater than or equal to 0 and less than or equal `Number.MAX_SAFE_INTEGER` to , it is an array of classes.

- **example**

  ```js
  isArrayLike([1, 2, 3])
  // => true
  
  isArrayLike(document.body.children)
  // => true
  
  isArrayLike('hi')
  // => true
  
  isArrayLike(Function)
  // => false
  ```

## isArrayLikeObject

- **type**

  ```ts
  function isArrayLikeObject<T>(value: unknown): value is Record<string | number, T>
  ```

- **description**

  This method is similar to isArrayLike, except that it also checks whether value is an object.

- **example**

  ```js
  isArrayLikeObject([1, 2, 3])
  // => true
  
  isArrayLikeObject(document.body.children)
  // => true
  
  isArrayLikeObject('hi')
  // => false
  
  isArrayLikeObject(Function)
  // => false
  ```

## isArguments

- **type**

  ```ts
  function isArguments(value: unknown): boolean
  ```

- **description**

  Detects whether value is an arguments object.

- **example**

  ```js
  isArguments(function() { return arguments })
  // => true
  
  isArguments([1, 2, 3])
  // => false
  ```

## isArrayBuffer

- **type**

  ```ts
  function isArrayBuffer(value: unknown): value is ArrayBuffer
  ```

- **description**

  Detects whether value is an ArrayBuffer object.

- **example**

  ```js
  isArrayBuffer(new ArrayBuffer(1))
  // => true
  
  isArrayBuffer(new Array(1))
  // => false
  ```

## isError

- **type**

  ```ts
  function isError(value: unknown): value is ErrorLike | Error | DOMException
  ```

- **description**

  Detects whether value is an `Error` object constructed for , `EvalError` `RangeError` `ReferenceError` `SyntaxError` `TypeError`

- **example**

  ```js
  isError(new Error)
  // => true
  
  isError(Error)
  // => false
  ```

## isDate

- **type**

  ```ts
  function isDate(value: unknown): value is Date
  ```

- **description**

  Detects whether value is a Date time object.

- **example**

  ```js
  isDate(new Date())
  // => true
  
  isDate('Tue Jan 25 2022')
  // => false
  ```

## isRegExp

- **type**

  ```ts
  function isRegExp(value: unknown): value is RegExp
  ```

- **description**

  Detects whether value is a RegExp regular object.

- **example**

  ```js
  isRegExp(/a/)
  // => true
  
  isRegExp('/a/')
  // => false
  ```

## isNaN

- **type**

  ```ts
  function isNaN(value: unknown): value is number
  ```

- **description**

  Detect whether value is NaN.

- **example**

  ```js
  isNaN(NaN)
  // => true
  
  isNaN(undefined)
  // => false
  ```

## isNil

- **type**

  ```ts
  function isNil(value: unknown): value is null | undefined
  ```

- **description**

  Detects whether value is a falsy value, which represents a `undefined` value that is strictly equal to `null` or .

- **example**

  ```js
  isNil(null)
  // => true
  
  isNil(undefined)
  // => true
  
  isNil('')
  // => false
  ```

## isFinite

- **type**

  ```ts
  function isFinite(value: unknown): value is number
  ```

- **description**

  Detects whether value is a finite number.

- **example**

  ```js
  isFinite(2)
  // => true
  
  isFinite(2e64)
  // => true
  
  isFinite(-Infinity)
  // => false
  
  isFinite(NaN)
  // => false
  ```

## isInteger

- **type**

  ```ts
  function isInteger(value: unknown): value is number
  ```

- **description**

  Detects whether value is an integer.

- **example**

  ```js
  isInteger(2)
  // => true
  
  isInteger(2.3)
  // => false
  
  isInteger(Number.MIN_VALUE)
  // => false
  
  isInteger(Infinity)
  // => false
  ```

## isLength

- **type**

  ```ts
  function isLength(value: unknown): boolean
  ```

- **description**

  Detects whether value is a valid array/class array with the length property.

- **example**

  ```js
  isLength(2)
  // => true
  
  isLength(-2)
  // => false
  
  isLength(Number.MIN_VALUE)
  // => false
  ```

## isPlainObject

- **type**

  ```ts
  function isPlainObject(value: unknown): value is Object
  ```

- **description**

  Detects whether value is a primitive object, either an object created by an Object instance or a prototype ( `[[Prototype]]` ) pointing to a null object.

- **example**

  ```js
  function Fun() {
    this.a = 0
  }
  
  isPlainObject(new Fun())
  // => false
  
  isPlainObject([1, 2, 3])
  // => false
  
  isPlainObject({ a: 1 })
  // => true
  
  isPlainObject(Object.create(null))
  // => true
  ```

## isMap

- **type**

  ```ts
  function isMap<K, V>(value: unknown): value is Map<K, V>
  ```

- **description**

Detects whether value is a Map object.

- **example**

  ```js
  isMap(new Map)
  // => true
  
  isMap(new WeakMap)
  // => false
  ```

## isWeakMap

- **type**

  ```ts
  function isWeakMap<K extends object, V>(value: unknown): value is WeakMap<K, V>
  ```

- **description**

  Detects whether value is a WeakMap object.

- **example**

  ```js
  isWeakMap(new WeakMap)
  // => true
  
  isWeakMap(new Map)
  // => false
  ```

## isSet

- **type**

  ```ts
  function isSet<T>(value: unknown): value is Set<T>
  ```

- **description**

  Detects whether value is a Set object.

- **example**

  ```js
  isSet(new Set)
  // => true
  
  isSet(new WeakSet)
  // => false
  ```

## isWeakSet

- **type**

  ```ts
  function isWeakSet<T extends object>(value: unknown): value is WeakSet<T>
  ```

- **description**

  Detects whether value is a WeakSet object.

- **example**

  ```js
  isWeakSet(new WeakSet)
  // => true
  
  isWeakSet(new Set)
  // => false
  ```