import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { PokeCardComponent } from './pages/poke-card/poke-card.component';
import { PokemonsGifsComponent } from './pages/pokemons-gifs/pokemons-gifs.component';
import { PokemonsTableComponent } from './pages/pokemons-table/pokemons-table.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "main", component: MainComponent },
      { path: "pokeGifs", component: PokemonsGifsComponent },
      { path: "allPokemons", component: PokemonsTableComponent },
      { path: "allPokemons/:id", component: PokeCardComponent },
      { path: "**", redirectTo: "main" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
