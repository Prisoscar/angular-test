import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaSpesaWrapperComponent } from '../lista-spesa-wrapper/lista-spesa-wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedListGuard implements CanDeactivate<ListaSpesaWrapperComponent> {
  canDeactivate(
    component: ListaSpesaWrapperComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(component.changesOccured) return window.confirm("You have unsaved changes. Do you want to exit without saving?");
      return true;
  }
  
}
