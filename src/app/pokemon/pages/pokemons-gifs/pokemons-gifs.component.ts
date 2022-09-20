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


    this.busquedas = JSON.parse(localStorage.getItem("keyBusquedas")!) || [];
    this.gifs =  JSON.parse(localStorage.getItem("keyGif")!) || [];
  }

  obtenerBusqueda(pokemon: string) {
    this.pokemonService.getGiphy(pokemon)
      .subscribe(resp => {
        this.gifs = resp;
        localStorage.setItem("keyGif", JSON.stringify(this.gifs))
      })

    if (!this.busquedas.includes(pokemon)) {
      this.busquedas.unshift(pokemon);
      localStorage.setItem("keyBusquedas", JSON.stringify(this.busquedas))
      this.busquedas = this.busquedas.slice(0, 8);
   
    }

  }
  constructor(private pokemonService: PokemonService) { }
}
