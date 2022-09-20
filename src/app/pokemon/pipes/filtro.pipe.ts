import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], valueSearch: string): Pokemon[] {
    if (valueSearch.length === 0) return pokemons;
    const filterPokemons = pokemons.filter(poke => poke.name.includes(valueSearch));
    return filterPokemons;

  }

}
