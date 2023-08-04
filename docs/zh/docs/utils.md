# 工具


### <synta text="eq(value, other)">eq</synta>

判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_eqness)

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

### <synta text="toFinite(value)">toFinite</synta>

value 转有限数字

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

### <synta text="toInteger(value)">toInteger</synta>

value 转整数

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

### <synta text="toLength(value)">toLength</synta>

将 value 转换为符合数组 length 属性长度的整数

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

### <synta text="toNumber(value)">toNumber</synta>

value 转数字

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

### <synta text="toArray(value)">toArray</synta>

value 转数组

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

