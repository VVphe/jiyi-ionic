import { Component, OnInit, Input, HostListener } from '@angular/core';
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
    this.router.navigateByUrl('videoplay/' + this.videoInfo.id);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
