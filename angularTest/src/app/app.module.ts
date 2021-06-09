import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper/lista-spesa-wrapper.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { FormSpesaComponent } from './form-spesa/form-spesa.component';
import { TotaleSpesaComponent } from './totale-spesa/totale-spesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelettoreListaComponent } from './selettore-lista/selettore-lista.component';
import { UnSavedListGuard } from './guards/un-saved-list.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveChangesBoxComponent } from './save-changes-box/save-changes-box.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaSpesaWrapperComponent,
    ListaSpesaComponent,
    FormSpesaComponent,
    TotaleSpesaComponent,
    SelettoreListaComponent,
    SaveChangesBoxComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [UnSavedListGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
