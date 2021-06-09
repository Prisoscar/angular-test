import { ToastrServices } from './../services/toastr.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user';
import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastrServices: ToastrServices, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  performLogin() {
    this.toastrServices.loadingToast("dtftyty","yfuyfu");
    console.log(this.loginForm.value);
  }

}
