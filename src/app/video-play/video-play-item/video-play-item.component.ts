import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-play-item',
  templateUrl: './video-play-item.component.html',
  styleUrls: ['./video-play-item.component.scss']
})
export class VideoPlayItemComponent implements OnInit {

  @Input()
  videoInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
