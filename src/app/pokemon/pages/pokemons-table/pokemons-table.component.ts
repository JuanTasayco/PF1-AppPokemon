import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';




@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: []
})
export class PokemonsTableComponent implements OnInit {

  arrayPromisesPokemon: Observable<Pokemon>[] = [];
  pokemons: Pokemon[] = [];
  search: string = "";
  ngOnInit(): void {
    for (let i = 1; i < 100; i++) {
      this.arrayPromisesPokemon.push(this.pokemonService.getPokemonByNumber(i));
    }
    combineLatest(this.arrayPromisesPokemon)
      .subscribe(resp => {
        this.pokemons = resp;
      })
  }

  obtenerBusqueda(pokemon: string) {
    this.search = pokemon;
  }


  constructor(private pokemonService: PokemonService) { }
}
