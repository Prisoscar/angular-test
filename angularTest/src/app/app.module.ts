import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { FormSpesaComponent } from './form-spesa/form-spesa.component';
import { TotaleSpesaComponent } from './totale-spesa/totale-spesa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaSpesaWrapperComponent,
    ListaSpesaComponent,
    FormSpesaComponent,
    TotaleSpesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
