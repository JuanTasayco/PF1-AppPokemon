import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GiphyResponse, Pokemon } from '../pokemon/interfaces/pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  keyGiphy: string = environment.keyGiphy;



  getPokemonByNumber(numero: number): Observable<Pokemon> {
    const baseUrl = "https://pokeapi.co/api/v2";
    return this.http.get<Pokemon>(`${baseUrl}/pokemon/${numero}`);

  }


  getGiphy(nombreBuscado: string): Observable<string[]> {
    const url: string = "api.giphy.com/v1"
    return this.http.get<GiphyResponse>(`http://${url}/gifs/search?api_key=${this.keyGiphy}&q=${nombreBuscado}&limit=6`)
      .pipe(
        map(resp => resp.data)
      )
  }


  constructor(private http: HttpClient) { }
}
