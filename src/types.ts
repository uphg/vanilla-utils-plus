export type FlattenCallback<T, U> = (item: T | RecursiveArray<T>, index: number, array: RecursiveArray<T>) => U

export type Key = string | number | symbol
export type MaybeArrayLike<T> = T | ArrayLike<T>
// export type MaybeNodes = MaybeArrayLike<Node | null>
export type RecursiveArrayLike<T> = ArrayLike<T | RecursiveArrayLike<T>>
export type RecursiveArray<T> = Array<T | RecursiveArray<T>>

export type HandleClassParams = MaybeArrayLike<string> | (HandleClassCallback)
export type HandleClassCallback = (currentClass: string) => MaybeArrayLike<string>
