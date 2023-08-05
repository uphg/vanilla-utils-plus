import toFinite from './toFinite';

function toInteger(value: unknown) {
  const result = toFinite(value)
  const remainder = result % 1

  return remainder ? result - remainder : result
}

export default toInteger
