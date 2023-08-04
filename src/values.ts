import baseValues from './internal/baseValues';
import isNil from './isNil';
import keys from './keys';

function values(obj: object) {
  return isNil(obj) ? [] : baseValues(obj, keys(obj))
}

export default values
