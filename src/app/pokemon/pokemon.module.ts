import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { GifResultsComponent } from './components/gif-results/gif-results.component';
import { SearchComponent } from './components/search/search.component';
import { TableResultsComponent } from './components/table-results/table-results.component';
import { PokemonsGifsComponent } from './pages/pokemons-gifs/pokemons-gifs.component';
import { PokemonsTableComponent } from './pages/pokemons-table/pokemons-table.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    GifResultsComponent,
    SearchComponent,
    TableResultsComponent,
    HomeComponent,
    PokemonsGifsComponent,
    PokemonsTableComponent,
    MainComponent,
    FiltroPipe,

  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule

  ]
})
export class PokemonModule { }
