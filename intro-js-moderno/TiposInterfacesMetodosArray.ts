
/* Objetivo: Tipar corretamente dados e funções que operam sobre listas.

    Crie uma interface Livro com os campos:
        titulo (string)
        autor (string)
        ano (number)
        disponivel (boolean)

    Crie um array biblioteca: Livro[] com ao menos 3 livros.

    Implemente a função listarTitulosDisponiveis(livros: Livro[]): string[] que retorne apenas os títulos dos livros com disponivel = true.

    Use filter e map com tipagem apropriada.
 */

interface Livro {
      titulo: string;
      autor: string;
      ano: number;
      disponivel: boolean;
}

let biblioteca: Livro[] = [
     { titulo: "Livro1", autor: "Machado de Assis", ano: 1891, disponivel: true },
     { titulo: "Livro2", autor: "Fernando Rosa", ano: 2001, disponivel: false },
    { titulo: "Livro3", autor: "Maurício Gomes", ano: 2014, disponivel: true }
]

function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter((livro: Livro) => livro.disponivel)
    .map((livro: Livro) => livro.titulo);
}

console.log(listarTitulosDisponiveis(biblioteca));

      
    