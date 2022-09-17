import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  @ViewChild("pokemon") pokemon!: ElementRef;
  @Output() emitirBusqueda: EventEmitter<string> = new EventEmitter();
  @Output() emitirDebounce: EventEmitter<string> = new EventEmitter();

  expresionValidacionCampo: string = "([a-zA-Z0-9]+)";
  miFormulario: FormGroup = this.fb.group({
    pokemon: ["", [Validators.required, Validators.pattern(this.expresionValidacionCampo)]]
  })

  obtenerBusqueda() {
    if (this.miFormulario.invalid) {
      return;
    }
    const pokemon = this.miFormulario.get("pokemon")?.value.toLowerCase()
    this.emitirBusqueda.emit(pokemon)
    this.miFormulario.reset();
  }


  debounce: Subject<string> = new Subject;

  ngOnInit(): void {
    this.debounce
      .subscribe(pokemon => {
        this.emitirDebounce.emit(pokemon);
      })

  }


  enviarBusquedaParaFiltro(pokemon: string) {
    this.debounce.next(pokemon);
  }

  constructor(private fb: FormBuilder) { }

}
