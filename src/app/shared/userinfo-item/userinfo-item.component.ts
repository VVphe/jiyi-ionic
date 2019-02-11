import { Component, OnInit, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

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

  avatorUrl: string;

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userInfo.userId], { queryParams: { type: 0 } })
    )
  }

  constructor(private router: Router, @Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
    this.avatorUrl = this.nodeUrl + '/users/avator/' + this.userInfo.userId;
  }

  concernClick(event: Event) {
    event.stopPropagation();
    this.toggleConcern.emit(this.concerned ? 'cancel' : 'concern');
    this.concerned = this.concerned ? false : true;
  }

}
