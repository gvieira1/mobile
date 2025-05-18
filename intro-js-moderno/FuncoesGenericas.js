"use strict";
/*Objetivo: Criar funções reutilizáveis fortemente tipadas.

Implemente a função obterPrimeiro<T>(lista: T[]): T que retorna o primeiro item da lista.

Use a função com uma lista de string[], depois com number[], e com um tipo personalizado:

interface Produto {
      nome: string;
      preco: number;
}
    Demonstre o uso correto da inferência de tipos.
*/
const listaString = ["a", "b", "c"];
const listaNumber = [1, 2, 3];
const tipoPersonalizado = [
    {
        nome: "Chiclete",
        preco: 25
    },
    {
        nome: "Bala",
        preco: 32
    }
];
function obterPrimeiro(lista) {
    return lista[0];
}
;
console.log(obterPrimeiro(listaString));
console.log(obterPrimeiro(listaNumber));
console.log(obterPrimeiro(tipoPersonalizado));
