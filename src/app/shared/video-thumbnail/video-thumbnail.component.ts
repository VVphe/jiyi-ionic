import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input()
  videoInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
