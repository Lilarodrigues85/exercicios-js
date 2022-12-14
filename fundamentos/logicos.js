function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2 // || operador lógico tipo OU
  const comprarTv50 = trabalho1 && trabalho2 // && operador lógico tipo E
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const materSaudavel = !comprarSorvete //operador unário

  return {comprarSorvete, comprarTv50, comprarTv32, materSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

