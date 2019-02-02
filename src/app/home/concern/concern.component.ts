import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-concern',
  templateUrl: './concern.component.html',
  styleUrls: ['./concern.component.scss'],
  providers: [UserService]
})
export class ConcernComponent implements OnInit {

  concernList: any;
  concernVideos: any;

  constructor(private userService: UserService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('userId').then(value => {
      this.userService.getConcernedListOf(value).subscribe(list => {
        this.concernList = list;
      });
    })

    this.concernVideos = [
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png'
      },
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png'
      },
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png'
      }
    ]
  }

}