import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute } from '@angular/router';
import { commentAnim } from "../../animates/recommend.animate";
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  animations: [commentAnim],
  providers: [VideoService, CommentsService]
})
export class VideoDetailComponent implements OnInit {

  videoInfo: object;
  recommendVideoList: any;
  comments: any;

  animState = 'hide';

  constructor(
    private videoService: VideoService, 
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService) { }

  ngOnInit() {
    //TODO:
    // this.videoInfo = this.videoService.getVideoDetail(3);
    // this.videoInfo = this.activatedRoute.snapshot.params;
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe(params => {
      this.videoInfo = params;
      console.log(this.videoInfo);
    })
    
    this.recommendVideoList = this.videoService.getRecommendsOf('life');

    // console.log(this.activatedRoute.snapshot.params['videoId']);
  }

  showCommentsHandler() {
    this.animState = this.animState == 'hide' ? 'show' : 'hide';
    this.comments = this.commentsService.getComments(3);
  }

}
