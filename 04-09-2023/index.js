
// const notas = [
//     {
//         materia: 'Matemática',
//         nota: '7'
//     },
//     {
//         materia: 'Português',
//         nota: '8'
//     },
//     {
//         materia: 'Química',
//         nota: '5'
//     }
// ]

// for (const index in notas) {
//     console.log(`${notas[index].materia}: ${notas[index].nota}`)
// }
// for (const i in notas){
//     soma += Number(notas[i].nota)
// }

// const media = (soma / notas.length).toFixed(2)
// console.log(media);

// let soma = 0

let matriz = [1, 2, 3, 4, 5, 6]
for(const value of matriz){
    soma += value
}
console.log(soma);


// const nome = 'JOÃO'
// for(const letra of nome){
//     console.log(letra);
// }

// console.log(nome[0]);

const clientes = [
    {
        nome: 'Cliente 1',
        valor: 450,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 2',
        valor: 100,
        quantidade: 10,
        produto: 'Produto 2'
    },
    {
        nome: 'Cliente 3',
        valor: 250,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 4',
        valor: 140,
        quantidade: 8,
        produto: 'Produto 4'
    },
]
//1
let total = 0
let itens = 0
for(const cliente of clientes){
    console.log(cliente.valor * cliente.quantidade);
}
//2
for(const totalCliente of clientes){
    total += totalCliente.valor * totalCliente.quantidade
}
console.log(`O valor total de todos cliente ${total}`);
//3
for(const itensTotal of clientes){
 itens += itensTotal.quantidade
}
console.log(`Os itens total do cliente ${itens}`);
/**
 * 1ª - O valor total gasto por clientes
 * 2ª - O valor total de todos os clientes juntos
 * 3ª - A quantidade total de itens vendidos todos juntos
 * */ 