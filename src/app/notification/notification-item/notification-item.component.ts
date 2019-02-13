import { Component, OnInit, Input, Inject } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  providers: [VideoService, UserService]
})
export class NotificationItemComponent implements OnInit {

  @Input()
  notification: any;

  constructor(@Inject('nodeUrl') private nodeUrl, private videoService: VideoService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.videoService.getVideoDetail(this.notification.videoId).subscribe(detail => {
      console.log(detail);
      this.notification.videoInfo = detail;
    })
    this.userService.getUserInfoOf(this.notification.userId).subscribe(info => {
      this.notification.username = info['username'];
    })
  }

  goUserInfo() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.notification.userId], { queryParams: { type: 0 } })
    )
  }

  goVideoInfo() {
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['videoplay/' + this.notification.videoInfo.id], {queryParams: this.notification.videoInfo}
      )
    );
  }

}
