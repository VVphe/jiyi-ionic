import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input()
  videoInfo: any;

  @HostListener('click')
  onClick() {
    console.log(this.videoInfo);
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['videoplay/' + this.videoInfo.id], {queryParams: this.videoInfo}
      )
    );
  }

  constructor(private router: Router, @Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
  }

  showUserInfo(event: Event) {
    event.stopPropagation()
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.videoInfo.authorId], { queryParams: { type: 0 } })
    )
  }

}
