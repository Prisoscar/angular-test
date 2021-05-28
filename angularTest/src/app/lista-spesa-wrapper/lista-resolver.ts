import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ElementoLista } from "./elemento-lista";

@Injectable({providedIn: "root"})
export class ListaResolver implements Resolve<Observable<ElementoLista []>>{

    constructor(private http: HttpClient){} 
    urlLista = "http://localhost:3000/elementiLista";

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ElementoLista[]>{
        let idLista = route.params.idLista;
        console.log("ListraResolver => Retrieving this: " + this.urlLista + "?idLista=" + idLista);
        return this.http.get<ElementoLista []>(this.urlLista + "?idLista=" + idLista);
    }

}