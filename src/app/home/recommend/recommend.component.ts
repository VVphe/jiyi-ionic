import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  providers: [VideoService]
})
export class RecommendComponent implements OnInit {

  everydayPickVideo: any;
  videoList: any;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videoService.getEverydayVideo().subscribe(everydayPickVideo => {
      console.log(everydayPickVideo);
      this.everydayPickVideo = everydayPickVideo;
    });
    this.videoService.getCategoryVideos().subscribe(videoList => {
      this.videoList = videoList;
    });
  }

  goCategory(category) {
    this.router.navigateByUrl('/home/' + category);
  }

}
