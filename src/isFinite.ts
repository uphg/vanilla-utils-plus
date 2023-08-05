import { _isFinite, _isNaN } from './internal/common'

function isFinite(value: unknown): value is number {
  return typeof value === 'number' && _isFinite(value) && !_isNaN(value)
}

export default Number.isFinite || isFinite
