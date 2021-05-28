import { SelettoreListaComponent } from './selettore-lista/selettore-lista.component';
import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaResolver } from './lista-spesa-wrapper/lista-resolver';
import { UnSavedListGuard } from './guards/un-saved-list.guard';

const routes: Routes = [
  {path: "", redirectTo: "/selezionalista", pathMatch: "full"},
  {path: "selezionalista", component: SelettoreListaComponent},
  {path: "listaspesa/:idLista", component: ListaSpesaWrapperComponent, resolve: {lista: ListaResolver}, canDeactivate: [UnSavedListGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
