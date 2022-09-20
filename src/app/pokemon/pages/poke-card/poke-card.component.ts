import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ContentPokemonCard, Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonSpecies } from '../../interfaces/pokeSpecies.interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: []
})
export class PokeCardComponent implements OnInit {

  pokemonSpecie!: PokemonSpecies;
  frasePokemon: string[] = [];
  pokemon!: Pokemon;
 /*  cardBodyinfo: ContentPokemonCard[] = [

    {
      title: "Habitad",
      pokeLink: "pokemonSpecie.habitat.name"
    },
    {
      title: "Generacion",
      pokeLink: "pokemonSpecie.generation.name",
      pipePoke: "titlecase"
    },
    {
      title: "Legendario",
      pokeLink: "pokemonSpecie.is_legendary",
      pipePoke: "falsePoke"
    },
    {
      title: "Mítico",
      pokeLink: "pokemonSpecie.is_mythical",
      pipePoke: "falsePoke"
    },
    {
      title: "Bebé",
      pokeLink: "pokemonSpecie.is_baby",
      pipePoke: "falsePoke"
    },
    {
      title: "Nivel de felicidad",
      pokeLink: "pokemonSpecie.base_happiness"
    },
    {
      title: "Forma",
      pokeLink: "pokemonSpecie.shape.name"
    }
  ]; */


  ngOnInit(): void {
    //get species
    this.router.params
      .pipe(switchMap(({ id }) => this.pokemonService.getSpecieByPokemon(id)))
      .subscribe(pokemonResponse => {
        this.pokemonSpecie = pokemonResponse;
        for (let esp of this.pokemonSpecie.flavor_text_entries) {
          if (esp.language.name === "es") {
            if (!this.frasePokemon.includes(esp.flavor_text.trim())) {
              this.frasePokemon.push(esp.flavor_text.trim())
            }
          }
        }
      })
    //get pokemon
    this.router.params
      .pipe(switchMap(({ id }) => this.pokemonService.getPokemonByName(id)))
      .subscribe(pokemonResponse => {
        this.pokemon = pokemonResponse;    
      })

  }



  constructor(private router: ActivatedRoute,
    private pokemonService: PokemonService) { }




}
