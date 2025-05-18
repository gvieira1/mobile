/* Objetivo: Criar variações seguras de tipos com base em estruturas existentes.

Crie uma interface Usuario com os campos:
        id: number
        nome: string
        email: string
        senha: string

Crie dois novos tipos:

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;
    
Implemente duas funções:
    function exibirPerfil(u: UsuarioSemSenha): void;
    function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void;
Use console.log() para simular os efeitos. */

interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha: string,
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

const usuarioSemSenha: UsuarioSemSenha = {
    id: 1,
    nome: "Oswaldo Aranha",
    email: "user@email.com"
};

const usuarioAtualiza: UsuarioAtualizacao = {
    id: 1,
    email: "usernovo@email.com"
};

function exibirPerfil(u: UsuarioSemSenha): void{
    console.log(`Perfil: ${u.nome}, id: ${u.id}, email: ${u.email}
        `);
};

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void{
    console.log(`Atualização de Usuário: 
        Id: ${id}, email: ${dados.email}`);
};

exibirPerfil(usuarioSemSenha);
atualizarUsuario(1, usuarioAtualiza);

