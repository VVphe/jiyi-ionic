import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  providers: [VideoService]
})
export class RecommendComponent implements OnInit {

  everydayPickVideo: any;
  videoList: any;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.everydayPickVideo = this.videoService.getEverydayVideo();
    this.videoList = this.videoService.getCategoryVideos();
  }

}
