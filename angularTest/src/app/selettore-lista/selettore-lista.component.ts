import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../lista-spesa-wrapper/lista';

@Component({
  selector: 'app-selettore-lista',
  templateUrl: './selettore-lista.component.html',
  styleUrls: ['./selettore-lista.component.css']
})
export class SelettoreListaComponent implements OnInit {
  
  idLista!: number;
  errore = false;
  urlListe = "http://localhost:3000/liste";
  liste!: Lista[];

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.getListe();
  }

  getListe(){
    this.http.get<Lista[]>(this.urlListe).subscribe(res => this.liste = res);
  }

  confirmList(){
    console.log("SelettoreListaComponent.confirmList => Button pressed");
    if(this.idLista) this.router.navigate(["listaspesa/", this.idLista]);
    if(!this.idLista) {
      this.errore = true;
      console.log("SelettoreListaComponent.confirmList => Error triggered? " + this.errore);
    }
  } 
}
