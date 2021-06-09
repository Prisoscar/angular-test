import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ElementoLista } from "./elemento-lista";
import { Lista } from "./lista";

@Injectable({providedIn: "root"})
export class ListaResolver implements Resolve<Observable<Lista []>>{

    constructor(private http: HttpClient){} 
    urlListe = "http://localhost:3000/liste";

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lista[]>{
        let idLista = route.params.idLista;
        console.log("ListraResolver => Retrieving list object: " + this.urlListe + "/" + idLista);
        return this.http.get<Lista []>(this.urlListe + "/" + idLista);
    }

}