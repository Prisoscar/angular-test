import { LoginFormComponent } from './login-form/login-form.component';
import { SelettoreListaComponent } from './selettore-lista/selettore-lista.component';
import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { ListaResolver } from './lista-spesa-wrapper/lista-resolver';
import { UnSavedListGuard } from './guards/un-saved-list.guard';
import { ElementiListaResolver } from './lista-spesa-wrapper/elementi-lista-resolver';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  /*{ path: '', CanActivateChild: [AuthGuard], children: [
    { path: '', component: SomeCOmponent},
    { path: 'Tools', globalCanActivate: [AuthGuard], component: ToolsComponent, children: [ { path: 'ToolA', ... } ] },
  ]},  */
  {path: "login", component: LoginFormComponent},
  {path: "", canActivateChild: [AuthGuard], children: [ 
    {path: "selezionalista", component: SelettoreListaComponent},
    {path: "listaspesa/:idLista", component: ListaSpesaWrapperComponent,
     resolve: {lista: ListaResolver, elementiLista: ElementiListaResolver},
      canDeactivate: [UnSavedListGuard] }  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
