import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute } from '@angular/router';
import { commentAnim } from "../../animates/recommend.animate";
import { CommentsService } from 'src/app/services/comments.service';
import { Storage } from "@ionic/storage";
import { ViewChild, ElementRef } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  animations: [commentAnim],
  providers: [VideoService, CommentsService, UserService, ToastService]
})
export class VideoDetailComponent implements OnInit {

  videoInfo: any;
  recommendVideoList: any;
  comments: any;
  commentCount: number;

  currentInputType = 'comment';
  currentCommentMsg: any;

  animState = 'hide';

  myComment: String;
  myReply: String;

  @ViewChild('replyInput')
  replyInput: ElementRef;

  userInfo: any;
  concerned: boolean;
  stared: boolean;
  liked: boolean;

  currentUserId;

  constructor(
    private videoService: VideoService, 
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
    private storage: Storage,
    private keyBoard: Keyboard,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.videoInfo = params;
      this.commentCount = this.videoInfo.commentCount;
      this.videoService.getRecommendsOf(this.videoInfo.category).subscribe(videos => {
        videos = videos.filter(video => {
          return video.id != this.videoInfo.id;
        });
        this.recommendVideoList = videos;
      })
      this.userService.getUserInfoOf(this.videoInfo.authorId).subscribe(userInfo => {
        console.log(userInfo);
        this.userInfo = userInfo;
      })
      
      this.storage.get('userId').then(value => {
        this.currentUserId = value;
        this.userService.getHasConcernedOf(value, this.videoInfo.authorId).subscribe(res => {
          this.concerned = res;
        })
        this.userService.getHasStaredOf(value, this.videoInfo.id).subscribe(res => {
          this.stared = res;
        })
        this.userService.getHasLikedOf(value, this.videoInfo.id).subscribe(res => {
          this.liked = res;
        })
      })
    })
  }

  showCommentsHandler() {
    this.animState = this.animState == 'hide' ? 'show' : 'hide';
    this.commentsService.getComments(this.videoInfo.id).subscribe(comments => {
      this.comments = comments;
    });
  }

  likeHandler(videoInfo) {
    if (this.liked) {
      this.toastService.create('您已收藏该作品咯');
      return;
    }
    let _videoInfo = {};
    for (let key in videoInfo) {
      if (key != '__id' && key != '_id') {
        _videoInfo[key] = videoInfo[key];
      }
    }
    this.storage.get('userId').then(value => {
      if (value == _videoInfo['authorId']) {
        this.toastService.create('这是您的作品哦');
      } else {
        _videoInfo['userId'] = value;
        this.videoService.likeVideo(_videoInfo).subscribe();
        this.liked = true;
        this.toastService.create('收藏成功咯');
      }
    })
  }

  starHandler(videoInfo) {
    if (this.stared) {
      this.toastService.create('您已点赞该作品咯');
      return;
    }
    this.storage.get('userId').then(value => {
      this.videoService.starVideo(value, videoInfo.id).subscribe();
      this.toastService.create('点赞成功咯');
    })
  }

  publishComment(event) {
    if (event.key == 'Enter') {
      Promise.all([
        this.storage.get('userId'),
        this.storage.get('username'),
        this.storage.get('avator')
      ]).then((values) => {
        this.commentsService.publishComment(this.videoInfo.id, values[0], values[1], values[2], this.myComment)
          .subscribe((res: any) => {
            this.comments.unshift(res);
            this.commentCount = res.commentCount;
            this.myComment = '';
          });
      })
      this.keyBoard.hide();
    }
  }

  publishReply(event) {
    if (event.key == 'Enter') {
      Promise.all([
        this.storage.get('userId'),
        this.storage.get('username'),
        this.storage.get('avator')
      ]).then((values) => {
        this.commentsService.publishReply(this.videoInfo.id, values[0], values[1], values[2], this.myReply, this.currentCommentMsg.content, this.currentCommentMsg.userId, this.currentCommentMsg.username, this.currentCommentMsg.avator)
          .subscribe((res: any) => {
            this.comments.unshift(res);
            this.commentCount = res.commentCount;
            this.myReply = '';
            this.currentInputType = 'comment';
          });
      })
      this.keyBoard.hide();
    }
  }

  replyHandler(commentInfo) {
    this.currentInputType = 'reply';
    this.currentCommentMsg = commentInfo;
    this.replyInput.nativeElement.focus();
  }

  toggleConcernHandler(event, userId) {
    console.log(event);
    this.storage.get('userId').then(value => {
      if (event == 'concern') {
        this.userService.concern(value, userId).subscribe(() => {
          this.toastService.create('关注成功');
        });
      } else if (event == 'cancel') {
        this.userService.cancelConcern(value, userId).subscribe(() => {
          this.toastService.create('取消关注成功');
        })
      }
    })
  }

  goBack() {
    history.go(-1);
  }

  closeCommentList() {
    this.animState = 'hide';
  }

}
