import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrServices {

  constructor(private toastrService: ToastrService) { }

  loadingToast (message: string, title: string, duration?: number){
    console.log("ToastrServices.loadingToast => info toqastr called");
    this.toastrService.toastrConfig.positionClass = "toast-top-center"; 
    this.toastrService.info(message, title);
  }

}
