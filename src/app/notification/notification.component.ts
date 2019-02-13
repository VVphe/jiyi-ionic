import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [UserService]
})
export class NotificationComponent implements OnInit {

  notificationList: any;

  constructor(private userService: UserService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('userId').then(value => {
      this.userService.getNotificationOf(value).subscribe(list => {
        console.log(list);
        this.notificationList = list;
      })
    })
    
  }

}
