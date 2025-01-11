//QUESTÃO 1
// var indice = 13
// var soma = 0
// var K = 0

// while (K < indice) {
//     K = K + 1
//     console.log("K: "+K)
//     soma = soma + K
//     console.log("Soma: "+soma)
// }

// console.log(soma) SOMA = 91


// QUESTÃO 2
// var termo = 13
// var tamanho = 15 //Tamanho da sequência limitado para não haver problemas
// var resposta = ""
// var penultimo = 0, ultimo = 1
// var numero
// var encontrado = false

// if (termo == 0 || termo == 1) {
//     encontrado = true
// } else {
//     for (var count = 3;  count <= tamanho;  count++) {
//         numero = ultimo + penultimo
//         penultimo = ultimo
//         ultimo = numero
//         if (numero == termo) {
//             encontrado = true
//             break
//         }

//         console.log(numero)
//     }
// }

// if (encontrado) {
//     console.log(`Valor ${termo} encontrado na sequência`)
// } else {
//     console.log(`Valor ${termo} não encontrado na sequência`)
// }


// //QUESTÃO 3
// fetch('./faturamento.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Erro ao carregar o arquivo: ' + response.status) 
//         }
//         return response.json() 
//     })
//     .then(dados => {
//         const valoresFaturamento = Object.values(dados.faturamento) 

//         const menorValor = Math.min(...valoresFaturamento)
//         const maiorValor = Math.max(...valoresFaturamento)

//         const mediaValores = valoresFaturamento.reduce((acc, valor) => acc + valor, 0) / valoresFaturamento.length
//         const diasAcimaDaMedia = valoresFaturamento.filter(valor => valor > mediaValores).length


//         console.log('Vetor de faturamento:', valoresFaturamento) 
//         console.log('Menor valor de faturamento:', menorValor) 
//         console.log('Maior valor de faturamento:', maiorValor) 
//         console.log('Média de faturamento:', mediaValores) 
//         console.log('Dias acima da média de faturamento:', diasAcimaDaMedia) 
//     })
//     .catch(erro => {
//         console.error('Ocorreu um erro:', erro) 
//     }) 



// //QUESTÃO 4
// const faturamentoPorEstado = {
//     'SP': 67836.43,
//     'RJ': 36678.66,
//     'MG': 29229.88,
//     'ES': 27165.48,
//     'Outros': 19849.53
// } 

// const valorTotal = Object.values(faturamentoPorEstado)
//     .reduce((total, valor) => total + valor, 0) 

// for (let estado in faturamentoPorEstado) {
//     const percentual = (faturamentoPorEstado[estado] / valorTotal) * 100 
//     console.log(`${estado}: ${percentual.toFixed(2)}%`) 
// }

// console.log(`\nValor total: R$ ${valorTotal.toFixed(2)}`) 


// //QUESTÃO 5
// const texto = "Olá mundo!"
// let resultado = '' 

// function inverterString(texto) {
//     for(let i = texto.length - 1; i >= 0; i--) {
//         resultado += texto[i] 
//     }
//     return resultado 
// }

// console.log(inverterString(texto))