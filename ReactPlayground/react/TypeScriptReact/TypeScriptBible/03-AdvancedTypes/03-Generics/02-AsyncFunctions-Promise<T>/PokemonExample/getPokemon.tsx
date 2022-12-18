export interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export const getPokemonList = async (): Promise<PokemonList> => {
  const listResp = await fetch("http://localhost/api/v2/pokemon/");
  return await listResp.json();
};

export const getPokemon = async (url: string): Promise<Pokemon> => {
  const dataResp = await fetch(url);
  return await dataResp.json();
};

export const getFirstPokemon = async (): Promise<Pokemon> =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Getting the list");
      const list = await getPokemonList();
      resolve(await getPokemon(list.results[0].url));
    } catch (error) {
      reject(error);
    }
  });

import React, { useEffect, useState } from "react";
import { getPokemonList, getPokemon, Pokemon } from "./getPokemon";

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemonList().then(setPokemonList);
  }, []);

  useEffect(() => {
    if (pokemonList) {
      getPokemon(pokemonList.results[0].url).then(setPokemon);
    }
  }, [pokemonList]);

  return (
    <div>
      <h1>Pokemon </h1>
      {pokemon && (
        <div>
          <h2>{pokemon.name} </h2>
          <ul>
            {pokemon.stats.map((stat: any) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
