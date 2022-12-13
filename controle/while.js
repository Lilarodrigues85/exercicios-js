function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre (-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// a estrutura WHILE é uma estrutura de repetição que funciona com verdadeiro ou falso
// enquanto for verdadeiro ela executa e qdo for falso ela para
// propria para laços indeterminado de repetições