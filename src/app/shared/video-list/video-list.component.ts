import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input()
  videoList: any;

  firstVideo: any;
  restVideo: any;

  constructor() { }

  ngOnInit() {
    [this.firstVideo, ...this.restVideo] = this.videoList;
  }

}
