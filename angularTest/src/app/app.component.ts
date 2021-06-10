import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';

  constructor(){
    console.warn("- Enable Json-server in jsonServer folder\non project before executing app!\n\n");
  }
}
