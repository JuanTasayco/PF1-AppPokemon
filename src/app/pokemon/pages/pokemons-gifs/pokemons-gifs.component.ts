import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-gifs',
  templateUrl: './pokemons-gifs.component.html',
  styleUrls: []
})
export class PokemonsGifsComponent implements OnInit {

  gifs: string[] = [];
  busquedas: string[] = [];
  arrayBusquedasEsVacio: boolean = true;
  
  ngOnInit(): void {
    this.arrayBusquedasEsVacio = true;
  }

  obtenerBusqueda(pokemon: string) {
    this.pokemonService.getGiphy(pokemon)
      .subscribe(resp => {
        this.gifs = resp;
        this.arrayBusquedasEsVacio = false;
      })

    if (!this.busquedas.includes(pokemon)) {
      this.busquedas.unshift(pokemon);
      this.busquedas = this.busquedas.slice(0, 8);
    }

  }
  constructor(private pokemonService: PokemonService) { }
}
