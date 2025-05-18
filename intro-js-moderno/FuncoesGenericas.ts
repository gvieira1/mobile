/*Objetivo: Criar funções reutilizáveis fortemente tipadas.

Implemente a função obterPrimeiro<T>(lista: T[]): T que retorna o primeiro item da lista.

Use a função com uma lista de string[], depois com number[], e com um tipo personalizado:

interface Produto {
      nome: string;
      preco: number;
}
    Demonstre o uso correto da inferência de tipos.
*/
const listaString: string[] = ["a", "b", "c"];
const listaNumber: number[] = [1, 2, 3];

interface Produto {
    nome: string;
    preco: number;
}

const tipoPersonalizado: Produto[] = [
    {
        nome: "Chiclete",
        preco: 25
    },
    {
        nome: "Bala",
        preco: 32
    }
];

function obterPrimeiro<T>(lista: T[]): T{
    return lista[0];
};

console.log(obterPrimeiro(listaString));
console.log(obterPrimeiro(listaNumber));
console.log(obterPrimeiro(tipoPersonalizado));