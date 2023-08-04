import basePick from './internal/basePick';
import isNil from './isNil';

function pick<T extends object>(obj: T, includes: Array<keyof T>): T | {} {
  return isNil(obj) ? {} : basePick<T>(obj, includes)
}

export default pick
