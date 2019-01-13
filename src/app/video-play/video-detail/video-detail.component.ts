import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit {

  videoInfo: object;
  recommendVideoList: any;

  constructor(private videoService: VideoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //TODO:
    this.videoInfo = this.videoService.getVideoDetail(3);
    this.recommendVideoList = this.videoService.getRecommendsOf('life');

    console.log(this.activatedRoute.snapshot.params['videoId']);
  }

}
