import { Component, OnInit, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personal: any;
  userId: any;
  avatorUrl: string

  constructor(private storage: Storage, private router: Router, @Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
    Promise.all(
      [
        this.storage.get('userId'),
        this.storage.get('username'),
        this.storage.get('avator')
      ]
    ).then(values => {
      this.userId = values[0];
      this.personal = {
        userId: values[0],
        username: values[1],
        avator: values[2]
      }
      this.avatorUrl = this.nodeUrl + '/users/avator/' + this.userId;
    })

    
  }

  goWorks() {
    console.log('1');
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 0 } })
    )
  }

  goLikes() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 1 } })
    )
  }

  goConcerns() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['concernlist'])
    )
  }

  goUserInfo() {
    console.log(1);
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 0 } })
    )
  }

}
