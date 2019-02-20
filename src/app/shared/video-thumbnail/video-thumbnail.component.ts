import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input()
  videoInfo: any;

  @Input()
  titleColor = '#333333';
  @Input()
  descColor = '#666666';

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['videoplay/' + this.videoInfo.id], {queryParams: this.videoInfo}
      )
    );
  }

  constructor(private router: Router, @Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
  }

}
