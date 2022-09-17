import { Component, OnInit } from '@angular/core';

interface MenuSidenav {
  nombre: string,
  ruta: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  sidenavPokemon: MenuSidenav[] = [{
    nombre: "Menu",
    ruta: "/pokemon/main"
  },
  {
    nombre: "Pokemons",
    ruta: "/pokemon/allPokemons"
  },
  {
    nombre: "PokeGifs",
    ruta: "/pokemon/pokeGifs"
  }
]



  constructor() { }

}
