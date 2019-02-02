import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userinfo-item',
  templateUrl: './userinfo-item.component.html',
  styleUrls: ['./userinfo-item.component.scss']
})
export class UserinfoItemComponent implements OnInit {

  @Input()
  userInfo: any;

  @Input()
  concerned: boolean;

  @Output()
  toggleConcern = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.userInfo, this.concerned);
  }

  concernClick() {
    this.toggleConcern.emit(this.concerned ? 'cancel' : 'concern');
    this.concerned = this.concerned ? false : true;
  }

}
