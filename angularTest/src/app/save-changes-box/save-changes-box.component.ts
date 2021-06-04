import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-changes-box',
  templateUrl: './save-changes-box.component.html',
  styleUrls: ['./save-changes-box.component.css']
})
export class SaveChangesBoxComponent implements OnInit {

  @Input() nextStateUrl!: string;
  @Output() route = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeAction (route: boolean, save: boolean){
    console.log("SaveChangesBoxComponent.routeBack => request route for " + this.nextStateUrl)
    if(!route) this.delete.emit();
    else this.route.emit(save);
  }
}
