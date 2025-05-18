/* Objetivo: Representar múltiplos formatos possíveis para um mesmo tipo de dado.

    Crie dois tipos:

    type Sucesso = { tipo: "sucesso"; dados: string[] };
    type Erro = { tipo: "erro"; mensagem: string };
    type Resultado = Sucesso | Erro;
    
    Crie a função exibirResultado(r: Resultado): void que:

    Mostra os dados se r.tipo === "sucesso"
    Mostra a mensagem de erro se r.tipo === "erro"

    Use if com refinamento de tipo (type narrowing). */


type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };

type Resultado = Sucesso | Erro;

const resultado: Resultado = {
    tipo: "sucesso",
    dados: ["Mensagem de sucesso", "Mensagem 2"]
};

const resultadoErro: Resultado = {
    tipo: "erro",
    mensagem: "Mensagem de erro"
};

function exibirResultado(r: Resultado): void {
    if (r.tipo === "sucesso") {
        console.log("Dados:", r.dados);
      } else {
        console.log("Erro:", r.mensagem);
      }
}

exibirResultado(resultadoErro);

