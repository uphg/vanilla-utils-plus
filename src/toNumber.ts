import isObject from './isObject'
import isSymbol from './isSymbol'
import trim from './trim'
import { _Number, NAN, _parseInt } from './internal/common'

// Illegal hexadecimal string value
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

// binary string value
const reIsBinary = /^0b[01]+$/i

// Octal string value
const reIsOctal = /^0o[0-7]+$/i

function toNumber(value: any) {
  if (typeof value === 'number') return value
  if (typeof value === 'bigint') return _Number(value)
  if (isSymbol(value)) return NAN

  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }

  if (typeof value !== 'string') return +value

  value = trim(value)

  const isBinary = reIsBinary.test(value)

  return (isBinary || reIsOctal.test(value))
    ? _parseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value)
}

export default toNumber
