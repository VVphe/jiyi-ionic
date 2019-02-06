import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-concern-list',
  templateUrl: './concern-list.component.html',
  styleUrls: ['./concern-list.component.scss'],
  providers: [UserService]
})
export class ConcernListComponent implements OnInit {

  concernedList: any;

  constructor(private storage: Storage, private userService: UserService) { }

  ngOnInit() {
    this.storage.get('userId').then(value => {
      this.userService.getConcernedListOf(value).subscribe(list => {
        console.log(list);
        this.concernedList = list;
      });
    })
  }

  toggleConcernHandler(event, userId) {
    console.log(event);
    this.storage.get('userId').then(value => {
      if (event == 'concern') {
        this.userService.concern(value, userId).subscribe(() => {
          //TODO: toastr
        });
      } else if (event == 'cancel') {
        this.userService.cancelConcern(value, userId).subscribe(() => {
          //TODO: toastr
        })
      }
    })
  }

}
