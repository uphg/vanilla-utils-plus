# function

## debounce

- **type**

  ```ts
  function debounce<T extends Function>(
    func: T, wait: number, immediate?: boolean
  ): { cancel(): void }
  ```

- **description**

  Create an anti-shake function that is called after a specified time and re-timed if called halfway. You can set whether to call immediately on the first call by specifying Immediate Call.

- **example**

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

- **type**

  ```ts
  function throttle<T extends Function>(
    func: T, wait: number, options?: throttleOptions
  ): { cancel(): void; }
  ```

- **description**

  Creates a throttling function that is called at intervals of specified times. You can set whether to make the first call and the last deferred call by specifying leading, trailing.

- **example**

  ```js
  // 间隔 1 秒调用一次
  throttle(() => {}, 1000)
  
  // 间隔 1 秒调用一次，并且第一次调用会在一秒后
  throttle(() => {}, { leading: false })
  
  // 间隔 1 秒调用一次，并且不会存在最后一次延时调用
  throttle(() => {}, { trailing: false })
  ```

## delay

- **type**

  ```ts
  function delay<T extends TimerHandler, U extends unknown[]>(
    func: T, wait: number, ...args: U
  ): number
  ```

- **description**

  Wait a specified amount of time to call the function, which can pass in multiple parameters.

- **example**

  ```js
  delay((p1, p2) => {
    console.log(p1, p2)
  }, 1000, 'hello','hi')
  
  // after 1 second:
  // hello hi
  ```