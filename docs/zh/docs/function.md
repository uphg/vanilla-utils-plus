# 函数

## debounce

- **类型**

  ```ts
  function debounce<T extends Function>(
    func: T, wait: number, immediate?: boolean
  ): { cancel(): void }
  ```

- **描述**

  创建一个防抖函数，该函数会在指定时间后调用，如果中途调用，则会重新计时。可通过指定 immediate 设置是否在第一次调用时立即调用。

- **示例**

  ```js
  // 1 秒后调用
  debounce(() => {}, 1000)

  // 立即调用一次
  debounce(() => {}, 1000, true)

  const fn = debounce(() => {}, 1000)

  // 清空未调用定时器，内置
  fn.cancel()
  ```

## throttle

- **类型**

  ```ts
  function throttle<T extends Function>(
    func: T, wait: number, options?: throttleOptions
  ): { cancel(): void; }
  ```

- **描述**

  创建一个节流函数，该函数会间隔的指定时间内调用。可通过指定 leading、trailing 设置是否第一次调用和最后一次延迟调用。

- **示例**

  ```js
  // 间隔 1 秒调用一次
  throttle(() => {}, 1000)

  // 间隔 1 秒调用一次，并且第一次调用会在一秒后
  throttle(() => {}, { leading: false })

  // 间隔 1 秒调用一次，并且不会存在最后一次延时调用
  throttle(() => {}, { trailing: false })
  ```

## delay

- **类型**

  ```ts
  function delay<T extends TimerHandler, U extends unknown[]>(
    func: T, wait: number, ...args: U
  ): number
  ```

- **描述**

  等待指定时间后调用函数，可传入多个参数。

- **示例**

  ```js
  delay((p1, p2) => {
    console.log(p1, p2)
  }, 1000, 'hello','hi')

  // after 1 second:
  // hello hi
  ```
