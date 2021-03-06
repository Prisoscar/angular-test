import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { FormSpesaComponent } from './form-spesa/form-spesa.component';
import { TotaleSpesaComponent } from './totale-spesa/totale-spesa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelettoreListaComponent } from './selettore-lista/selettore-lista.component';
import { UnSavedListGuard } from './guards/un-saved-list.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaSpesaWrapperComponent,
    ListaSpesaComponent,
    FormSpesaComponent,
    TotaleSpesaComponent,
    SelettoreListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UnSavedListGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
