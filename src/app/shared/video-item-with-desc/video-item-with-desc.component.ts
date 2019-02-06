import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-item-with-desc',
  templateUrl: './video-item-with-desc.component.html',
  styleUrls: ['./video-item-with-desc.component.scss']
})
export class VideoItemWithDescComponent implements OnInit {

  labelMap: any;

  @Input()
  videoInfo: any;

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['videoplay/' + this.videoInfo.id], {queryParams: this.videoInfo}
      )
    );
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.labelMap = {
      nature: '日月星光',
      world: '奇妙世界',
      city: '都市',
      film: '电影'
    }
  }

  showUserInfo(event: Event) {
    event.stopPropagation()
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.videoInfo.authorId], { queryParams: { type: 0 } })
    )
  }

}
