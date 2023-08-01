import isObject from './isObject'
import camelize from './internal/camelize';
import each from './each'

function setStyle(
  el: Element,
  styles: Record<string, string> | string,
  value?: string
) {
  if (isObject(styles)) {
    each(styles, (item, key) => {
      setStyle(el, key as string, item)
    })
    return
  }

  const styleName = camelize(styles as string)
  ;(el as HTMLElement).style[styleName as unknown as number] = value!
}

export default setStyle
