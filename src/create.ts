
function create(prototype: Object | null, properties: Object | null = null) {
  const newPrototype = prototype === null ? null : new Object(prototype)

  const result = Object.create(newPrototype)
  return properties ? Object.assign(result, properties) : result 
}

export default create
