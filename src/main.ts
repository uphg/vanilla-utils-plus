import { Emitter, addBefore, toElement } from '.';

const emitter = new Emitter()

emitter.on('hi', (a: string) => {
  console.log(a)
})

const a = document.createTextNode('123') 

a.appendChild(a)

a.removeChild(a)

addBefore(document.body, a)

toElement('hi')
