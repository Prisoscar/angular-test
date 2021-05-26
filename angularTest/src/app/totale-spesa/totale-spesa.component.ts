import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-totale-spesa',
  templateUrl: './totale-spesa.component.html',
  styleUrls: ['./totale-spesa.component.css']
})
export class TotaleSpesaComponent implements OnInit {

  @Input() lista!: ElementoLista[];
  totale!: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange): void {
    console.log("sono in onChages");
      this.totale = changes.currentValue.reduce((accumulator: ElementoLista, element: ElementoLista) => {
        accumulator.prezzo = accumulator.prezzo + element.prezzo
      return accumulator
    }).prezzo;
  }
}
