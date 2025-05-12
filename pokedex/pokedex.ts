// Pega o argumento (nome ou ID do Pokémon)
const pokemonNameOrId = process.argv[2];

if (!pokemonNameOrId) {
  console.log('❗ Por favor, informe o nome ou ID de um Pokémon.');
  process.exit(1);
}

// Função principal assíncrona para buscar e exibir os dados
async function getPokemonInfo(nameOrId: string) {
  try {
    // Requisição para a PokéAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);

    // Se a resposta for 404 (não encontrado)
    if (response.status === 404) {
      console.log('❌ Pokémon não encontrado!');
      return;
    }

    // Se a resposta for outro erro
    if (!response.ok) {
      console.log('⚠️ Erro ao buscar dados. Código:', response.status);
      return;
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Extrai os dados necessários
    const nome = capitalize(data.name);
    const altura = data.height / 10; // altura vem em decímetros
    const peso = data.weight / 10;   // peso vem em hectogramas
    const tipos = data.types.map((t: any) => capitalize(t.type.name)).join(', ');

    // Exibe no formato desejado
    console.log(`${nome} – ${altura} m – ${peso} kg – ${tipos}`);
  } catch (error) {
    console.log('⚠️ Erro de rede. Tente novamente.');
  }
}

// Capitaliza a primeira letra
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Chama a função com o argumento recebido
getPokemonInfo(pokemonNameOrId);
