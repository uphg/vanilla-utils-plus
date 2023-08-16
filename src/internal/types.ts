export type Key = string | number | symbol

export type FakeFn = (...args: unknown[]) => any

export interface ObjectLike<T = unknown> { [k: Key]: T }

export type RecursiveArray<T> = Array<T | RecursiveArray<T>>

export type RecursiveArrayLike<T> = ArrayLike<T | RecursiveArrayLike<T>>

export type FindCallback<T> = (item: T, index?: number, array?: ArrayLike<T>) => boolean

export type PickByCallback<T> = (item: T[keyof T], key: keyof T) => boolean

export type TypedArray = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array

export interface ObjectConstructorNext extends ObjectConstructor {
  hasOwn: (obj: unknown, key: string | symbol) => boolean
}

export type FlattenCallback<T, U> = (item: T | RecursiveArrayLike<T>, index: number, array: RecursiveArrayLike<T>) => U | RecursiveArray<U>

export type MaybeArrayLike<T> = T | ArrayLike<T>

export type HandleClassParams = MaybeArrayLike<string> | (HandleClassCallback)

export type HandleClassCallback = (currentClass: string) => MaybeArrayLike<string>

export type EachCallback<T> = (item: T, inedx: number | string, object: ArrayLike<T> | Record<string | number, T>) => void
