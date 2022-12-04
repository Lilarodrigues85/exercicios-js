console.log('01)', '1' == 1) // == é um simbolo relacional, serve para saber se é igual
console.log('02)', '1' === 1) // === é extremamente igual
console.log('03)', '3' !=3 ) // != são diferentes
console.log('04)', '3' !== 3) // !== são extremamente diferentes

console.log('05)', 3 < 2)
console.log('05)', 3 > 2)
console.log('05)', 3 <= 2)
console.log('05)', 3 >= 2)

const d1 = new Date(0) // o 0 significa o marco zero do js 01/01/1970
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)