import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif-results',
  templateUrl: './gif-results.component.html',
  styleUrls: []
})
export class GifResultsComponent implements OnInit {

  @Input("gifsResults") gifs: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
