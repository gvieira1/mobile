import { useState, useEffect } from "react";
import type { Pokemon } from "../types/pokemon.ts";
import "./pokeCard.css";

type PokeCardProps = {
  pokemon: Pokemon;
};

export default function PokeCard({ pokemon }: PokeCardProps) {

const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    console.log(`Pokémon ${pokemon.name} carregado com sucesso!`);
  }, [pokemon]);

  return (
    <div className="pokedex-card">
      <h3 className="pokedex-name">{pokemon.name} {favorito ? "⭐" : "☆"}</h3>
      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokedex-image"
        />
      )}
      <p>
        <strong>Altura:</strong> {pokemon.height * 10} cm
      </p>
      <p>
        <strong>Peso:</strong> {pokemon.weight / 10} kg
      </p>
      <p>
        <strong>Tipos:</strong> {pokemon.types.map((t) => t.type.name).join(" / ")}
      </p>
      <button
        onClick={() => setFavorito(!favorito)}
        className={`favorito-button ${favorito ? "remover" : ""}`}
      >
        {favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      </button>
    </div>
  );
}