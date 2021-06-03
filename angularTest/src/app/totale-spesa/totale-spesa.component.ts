import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, OnInit} from '@angular/core';
import { ListaSpesaService } from '../services/lista-spesa.service';

@Component({
  selector: 'app-totale-spesa',
  templateUrl: './totale-spesa.component.html',
  styleUrls: ['./totale-spesa.component.css']
})
export class TotaleSpesaComponent implements OnInit {

  totale!: number;

  constructor(private listaSpesaService: ListaSpesaService) {
    listaSpesaService.listaObservable.subscribe(res =>{
      if(res.length == 0){
        this.totale = 0;
      } else{
        if(res.length == 1){
          this.totale = res[0].prezzo * res[0].quantita; 
        } else{
          this.totale = res
          .map((elemento: ElementoLista) => elemento.prezzo * elemento.quantita)
          .reduce((accumulator: number, elemento: number) => accumulator = accumulator + elemento);
        } 
      } 
    } );
    
   }

  ngOnInit(): void {
  }
}
