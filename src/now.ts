import { _now } from './internal/common'

function now() {
  return new Date().getTime()
}

export default _now || now
