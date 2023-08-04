function delay<T extends TimerHandler, U extends unknown[]>(func: T, wait: number, ...args: U) {
  return setTimeout(func, +wait || 0, ...args)
}

export default delay
