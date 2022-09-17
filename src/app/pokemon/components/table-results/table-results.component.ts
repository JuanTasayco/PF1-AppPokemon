import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

interface Country {
  id: number,
  name: string,
  area: string,
  population: number
}

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: []
})
export class TableResultsComponent {

  @Input("pokemonsTable") pokemons: Pokemon[] = []
  constructor() { }
  page = 1;
  pageSize = 8;
  collectionSize = 100;
  @Input("searchTable") search = ""; // para busquedas 
}
