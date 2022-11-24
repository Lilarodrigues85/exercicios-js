const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //acessar quantos elementos tem no array

valores.push({id:3}, false, null, 'teste')
console.log(valores) //pode misturar dados, mas não é uma boa prática

console.log(valores.pop()) //retira do array o ultimo valor
delete valores[0] //tira o valor zero do array
console.log(valores)

console.log(typeof valores)

//ARRAY = é heterogenio, ele é fexivel, aumenta e diminui.