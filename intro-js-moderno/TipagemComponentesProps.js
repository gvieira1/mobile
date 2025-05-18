"use strict";
/*
Objetivo: Simular props de componentes com TypeScript.

Crie uma interface PropsBotao com:
        titulo: string
        ativo?: boolean

Implemente a função:

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
      return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
    }

Teste com diferentes valores.

*/
function renderizarBotao({ titulo, ativo = true }) {
    return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}
const propsTrue = {
    titulo: "LabelTrue",
    ativo: true
};
const propsFalse = {
    titulo: "LabelFalse",
    ativo: false
};
console.log(renderizarBotao(propsTrue));
console.log(renderizarBotao(propsFalse));
