import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/selezionalista", pathMatch: "full"},
  {path: "selezionalista", component: ListaSpesaWrapperComponent},
  {path: "listaspesa/:idLista", component: ListaSpesaWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
