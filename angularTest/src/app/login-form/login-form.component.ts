import { ToastrServices } from './../services/toastr.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = new User("", "");
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern("^[a-zA-Z0-9-_£$%&€]+$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(128)])
  });
  load = false;
  badCredentials = false;
  urlUtenti = "http://localhost:3000/utente";
  invalidUsername = this.loginForm.controls['username'].invalid;
  invalidPassword = this.loginForm.controls['password'].invalid;

  constructor(private toastrServices: ToastrServices, private http: HttpClient) { }


  ngOnInit(): void {
  }
  getFormValue(key: string) {
    return this.loginForm.get(key)?.value;
  }
 


  performLogin() {
    this.load = true;
    this.badCredentials = false;
    var url = `${this.urlUtenti}?username=${this.getFormValue("username")}&password=${this.getFormValue("password")}`;



    console.log("LoginFormComponent.performLogin => performingLogin: ", url);
    this.http.get<User>(url).subscribe(res => {
      this.load = false;
      this.badCredentials = res.id ? false : true;
    });
    //return this.http.get<Lista []>(this.urlListe + "/" + idLista);
    //this.toastrServices.loadingToast("messaggio","titolo")
    console.log(this.loginForm.value);
  }

  calculateClasses() {
    if (this.load) return { 'blurred-background': true };
    else return { 'blurred-backgound': false };
  }

}
