import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, Input, OnInit} from '@angular/core';

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

  ngOnChanges(changes:any): void {
      if (changes.lista.currentValue && changes.lista.currentValue.length == 0) {
        this.totale = 0;
      } else {
        if (changes.lista.currentValue &&  changes.lista.currentValue.length == 1) {
          this.totale = changes.lista.currentValue[0].prezzo * changes.lista.currentValue[0].quantita;
        } else {
          this.totale = changes.lista.currentValue
                  .map((elemento: ElementoLista) => elemento.prezzo * elemento.quantita)
                  .reduce((accumulator: number, elemento: number) => accumulator = accumulator + elemento);

          /**.reduce((accumulator: ElementoLista, element: ElementoLista) => {
            accumulator.prezzo = accumulator.prezzo + element.prezzo*element.quantita
          return new ElementoLista("",0,accumulator.prezzo)
        }).prezzo;**/
        }
      }

  }
}
