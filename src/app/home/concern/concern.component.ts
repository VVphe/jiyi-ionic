import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-concern',
  templateUrl: './concern.component.html',
  styleUrls: ['./concern.component.scss'],
  providers: [UserService, VideoService]
})
export class ConcernComponent implements OnInit {

  concernList: any;
  concernVideos: any;

  constructor(private userService: UserService, private storage: Storage, private router: Router, private videoService: VideoService, @Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
    this.storage.get('userId').then(value => {
      this.userService.getConcernedListOf(value).subscribe(list => {
        this.concernList = list;
      });

      this.videoService.getConcernVideosOf(value).subscribe(list => {
        let videoList = [];
        if (list) {
          for(let i = 0; i < list['length']; i++) {
            for (let j = 0; j < list[i].length; j++) {
              videoList.push(list[i][j]);
            }
          }
        }
        this.concernVideos = list ? videoList : [];
      })
    })
  }

  showUserInfo(userId) {
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + userId], { queryParams: { type: 0 } })
    )
  }

  goConcernList() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['concernlist'])
    )
  }

}
