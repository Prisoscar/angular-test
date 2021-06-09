import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaSpesaService } from '../services/lista-spesa.service';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  urlLista = "http://localhost:3000/elementiLista";
  guardForm = false;
  changesOccured = false;
  nextStateUrl!: string;

  //Assign to lista-spesa-service all attributes taken from json-server
  constructor(private route: ActivatedRoute,
    private router: Router,
    private listaSpesaService: ListaSpesaService) {
      let idList = this.route.snapshot.paramMap.get("idLista");
      if (idList != null) this.listaSpesaService.idLista = + idList;
      this.route.data.subscribe(data => { 
        this.listaSpesaService.listaElementi = data.elementiLista;      //il nome elementiLista è stato dato nel routing module
        this.listaSpesaService.setList();
        this.listaSpesaService.nomeLista = data.lista.nome;
        console.log("ListaSpesaWrapperComponent.constructor.subscribe => list number " + this.listaSpesaService.idLista + " loaded.");
        });  
  }

  ngOnInit(): void {
  }

  //this method routes to list selection page
  routeToListSelectionPage(){
    console.log("ListaSpesaWrapperComponent.routeToListSelectionPage => Routing request for /selezionalista")
    this.changesOccured = this.listaSpesaService.changesOccurred;
    this.router.navigate(["/selezionalista"]);
  }

  saveChanges(){
    this.listaSpesaService.saveChanges();
  } 

  //this method saves changes if user agreed and route to selected route
  isChangesConfirmed(isConfirmed: boolean){
    console.log("ListaSpesaWrapperComponent.isChangesConfirmed => Has user confirmed changes before quit? " + isConfirmed);
    if(isConfirmed) this.listaSpesaService.saveChanges();
    console.log("executing route");    
    this.changesOccured = false;
    this.router.navigate([this.nextStateUrl]);
  }

  //this method activates the confirm changes form
  changeGuardForm(nextState: any){
    console.log("ListaSpesaWrapperComponent.changeGuardForm => Arrived routing request for: " + nextState.url);
    this.nextStateUrl = nextState.url;
    this.guardForm = !this.guardForm;    
  }

  //this method deactivates the confirm changes form and leaves user to actual page
  deleteRouting(){
    console.log("ListaSpesaWrapperComponent.deleteRouting => Routing request deleted from user.")
    this.guardForm = !this.guardForm; 
  }

  //if the save changes page is shown backgroun will be inactivated and blurred
  calculateClasses(){
    if (this.guardForm) return {'blurred-background': true };
    else return {'blurred-backgound': false };
  } 

  //if user delete the save before exit box
  ignoreEvent(event: any){
    console.log("ListaSpesaWrapperComponent.ignoreEvent => navigation deleted from save-changes-box-component.");
    this.guardForm = false;
  } 

  //if user saved data on the save before exit box
  routeEvent(event: any){
    console.log("ListaSpesaWrapperComponent.saveBeforeExit => saving before exit confirmend by save-changes-box-component? " + event);
    if(event) {
        this.listaSpesaService.saveChanges().subscribe(
      (res) =>{},
      (error) =>{},
      () =>{
        console.log("Esecuzione completata");
        this.changesOccured = false;
        this.router.navigate([this.nextStateUrl]);
      });
    }
    else {
      this.changesOccured = false;
      this.router.navigate([this.nextStateUrl]);
    }     
  } 
}
