# 类型

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

## eq

- **类型**

  ```ts
  function eq(value: unknown, other: unknown): boolean
  ```

- **描述**

  判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_eqness)。

- **示例**

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

- **类型**
    
  ```ts
  function toFinite(value: unknown): number
  ```

- **描述**

  value 转有限数字。

- **示例**

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

- **类型**
    
  ```ts
  function toInteger(value: unknown): number
  ```

- **描述**

  value 转整数。

- **示例**

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

- **类型**
    
  ```ts
  function toLength(value?: unknown): number
  ```

- **描述**

  将 value 转换为符合数组 length 属性长度的整数。

- **示例**

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

- **类型**
    
  ```ts
  function toNumber(value: any): number
  ```

- **描述**

  value 转数字。

- **示例**

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

- **类型**
    
  ```ts
  function toArray<T>(value: any): T[] | string[]
  ```

- **描述**

  value 转数组。

- **示例**

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

- **类型**
    
  ```ts
  function isBoolean(value: unknown): value is boolean
  ```

- **描述**

  检测 value 是否为布尔值。

- **示例**

  ```js
  isBoolean(NaN)
  // => false

  isBoolean(true)
  // => true

  isBoolean(new Boolean(false))
  // => false
  ```

## isString

- **类型**
    
  ```ts
  function isString(value: unknown): value is string
  ```

- **描述**

  检测 value 是否为字符串类型。

- **示例**

  ```js
  isString(1)
  // => false

  isString('hi')
  // => true
  ```

## isNumber

- **类型**
    
  ```ts
  function isNumber(value: unknown): value is number
  ```

- **描述**

  检测 value 是否为数字类型。

- **示例**

  ```js
  isNumber(1)
  // => true

  isNumber(NaN)
  // => true

  isNumber(Infinity)
  // => true
  ```

## isBigInt

- **类型**
    
  ```ts
  function isBigInt(value: unknown): value is BigInt
  ```

- **描述**

  检测 value 是否为 BigInt 类型。

- **示例**

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

- **类型**
    
  ```ts
  function isSymbol(value: unknown): value is symbol
  ```

- **描述**

  检测 value 是否为 Symobl 类型。

- **示例**

  ```js
  isSymbol(Symbol())
  // true

  isSymbol('hi')
  // false
  ```

## isFunction

- **类型**
    
  ```ts
  function isFunction(value: unknown): value is Function
  ```

- **描述**

  检测 value 是否为函数。

- **示例**

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

- **类型**
    
  ```ts
  function isObject(value: unknown): value is object
  ```

- **描述**

  检测 value 是否为 Object 类型，如：数组、函数、对象、正则表达式、`new Number(0)` 和 `new String('')`。

- **示例**

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

- **类型**
    
  ```ts
  function isObjectLike(value: unknown): value is object
  ```

- **描述**

  检测 value 是否为类似对象的结构，如果值不为 `null`，并且 typeof 的结果为 `'object'`，则该值类似对象。

- **示例**

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

- **类型**
    
  ```ts
  function isArray(value: unknown): value is unknown[]
  ```

- **描述**

  检测 value 是否为数组。

- **示例**

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

- **类型**
    
  ```ts
  function isArrayLike(value: unknown): value is string | unknown[]
  ```

- **描述**

  检测 value 是否为类数组，如果值不是函数，并且 value.length 是一个大于等于 0 且小于等于 `Number.MAX_SAFE_INTEGER` 的整数，它就是一个类数组。

- **示例**

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

- **类型**
    
  ```ts
  function isArrayLikeObject<T>(value: unknown): value is Record<string | number, T>
  ```

- **描述**

  此方法与 isArrayLike 类似，不一样的地方是它还会检查 value 是否为对象。

- **示例**

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

- **类型**
    
  ```ts
  function isArguments(value: unknown): boolean
  ```

- **描述**

  检测 value 是否为 arguments 对象。

- **示例**

  ```js
  isArguments(function() { return arguments })
  // => true

  isArguments([1, 2, 3])
  // => false
  ```

## isArrayBuffer

- **类型**
    
  ```ts
  function isArrayBuffer(value: unknown): value is ArrayBuffer
  ```

- **描述**

  检测 value 是否为 ArrayBuffer 对象。

- **示例**

  ```js
  isArrayBuffer(new ArrayBuffer(1))
  // => true
  
  isArrayBuffer(new Array(1))
  // => false
  ```

## isError

- **类型**
    
  ```ts
  function isError(value: unknown): value is ErrorLike | Error | DOMException
  ```

- **描述**

  检测 value 是否为 `Error`、`EvalError`、`RangeError`、`ReferenceError`、`SyntaxError`、`TypeError` 构造的对象。

- **示例**

  ```js
  isError(new Error)
  // => true

  isError(Error)
  // => false
  ```

## isDate

- **类型**
    
  ```ts
  function isDate(value: unknown): value is Date
  ```

- **描述**

  检测 value 是否为 Date 时间对象。

- **示例**

  ```js
  isDate(new Date())
  // => true

  isDate('Tue Jan 25 2022')
  // => false
  ```

## isRegExp

- **类型**
    
  ```ts
  function isRegExp(value: unknown): value is RegExp
  ```

- **描述**

  检测 value 是否为 RegExp 正则对象。

- **示例**

  ```js
  isRegExp(/a/)
  // => true

  isRegExp('/a/')
  // => false
  ```

## isNaN

- **类型**
    
  ```ts
  function isNaN(value: unknown): value is number
  ```

- **描述**

  检测 value 是否为 NaN。

- **示例**

  ```js
  isNaN(NaN)
  // => true

  isNaN(undefined)
  // => false
  ```

## isNil

- **类型**
    
  ```ts
  function isNil(value: unknown): value is null | undefined
  ```

- **描述**

  检测 value 是否为 falsy 值，falsy 值表示 严格等于 `null` 或 `undefined` 的值。

- **示例**

  ```js
  isNil(null)
  // => true

  isNil(undefined)
  // => true

  isNil('')
  // => false
  ```

## isFinite

- **类型**
    
  ```ts
  function isFinite(value: unknown): value is number
  ```

- **描述**

  检测 value 是否为有限数字。

- **示例**

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

- **类型**
    
  ```ts
  function isInteger(value: unknown): value is number
  ```

- **描述**

  检测 value 是否为整数。

- **示例**

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

- **类型**
    
  ```ts
  function isLength(value: unknown): boolean
  ```

- **描述**

  检测 value 是否为有效的数组/类数组 length 属性。

- **示例**

  ```js
  isLength(2)
  // => true

  isLength(-2)
  // => false

  isLength(Number.MIN_VALUE)
  // => false
  ```

## isPlainObject

- **类型**
    
  ```ts
  function isPlainObject(value: unknown): value is Object
  ```

- **描述**

  检测 value 是否为原始对象，原始对象包括：由 Object 实例创建的对象，或者原型（`[[Prototype]]`）指向为 null 的对象。

- **示例**

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

- **类型**
    
  ```ts
  function isMap<K, V>(value: unknown): value is Map<K, V>
  ```

- **描述**

检测 value 是否为 Map 对象。

- **示例**

  ```js
  isMap(new Map)
  // => true

  isMap(new WeakMap)
  // => false
  ```

## isWeakMap

- **类型**
    
  ```ts
  function isWeakMap<K extends object, V>(value: unknown): value is WeakMap<K, V>
  ```

- **描述**

  检测 value 是否为 WeakMap 对象。

- **示例**

  ```js
  isWeakMap(new WeakMap)
  // => true

  isWeakMap(new Map)
  // => false
  ```

## isSet

- **类型**
    
  ```ts
  function isSet<T>(value: unknown): value is Set<T>
  ```

- **描述**

  检测 value 是否为 Set 对象。

- **示例**

  ```js
  isSet(new Set)
  // => true

  isSet(new WeakSet)
  // => false
  ```

## isWeakSet

- **类型**
    
  ```ts
  function isWeakSet<T extends object>(value: unknown): value is WeakSet<T>
  ```

- **描述**

  检测 value 是否为 WeakSet 对象。

- **示例**

  ```js
  isWeakSet(new WeakSet)
  // => true

  isWeakSet(new Set)
  // => false
  ```
