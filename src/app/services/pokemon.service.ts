import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GiphyResponse, Pokemon } from '../pokemon/interfaces/pokemon.interface';
import { PokemonSpecies } from '../pokemon/interfaces/pokeSpecies.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  keyGiphy: string = "J4r77j8w5TfMYqKkdlYkHW9tayJznEn4"
  baseUrl = "https://pokeapi.co/api/v2";


  getPokemonByName(pokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${pokemon}`);
  }

  getPokemonByNumber(numero: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${numero}`);
  }

  getSpecieByPokemon(pokemon: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.baseUrl}/pokemon-species/${pokemon}`);
  }

  getGiphy(nombreBuscado: string): Observable<string[]> {
    const url: string = "api.giphy.com/v1"
    return this.http.get<GiphyResponse>(`http://${url}/gifs/search?api_key=${this.keyGiphy}&q=${nombreBuscado}&limit=10`)
      .pipe(
        map(resp => resp.data)
      )
  }


  constructor(private http: HttpClient) { }
}
