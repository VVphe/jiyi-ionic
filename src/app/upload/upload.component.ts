import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { uploadAnim } from '../animates/upload.animate';
import { Storage } from '@ionic/storage';
import { ToastService } from '../services/toast.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [uploadAnim],
  providers: [VideoService]
})
export class UploadComponent implements OnInit {

  videoId: string;
  thumbnailUri: string;
  title: string;
  subTitle: string;
  description: string;
  userId: string;

  @HostBinding('@uploadAnim') state;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private toastService: ToastService,
    private videoService: VideoService,
    @Inject('nodeUrl') private nodeUrl
  ) { }

  ngOnInit() {
    console.log('enter upload');
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.thumbnailUri = this.nodeUrl + '/video/thumbnail/' + queryParams.videoId;
      this.videoId = queryParams.videoId;
    });
    this.storage.get('userId').then(value => {
      this.userId = value;
    })
  }

  cancel() {
    history.back();
  }

  publish() {
    if (!this.title || this.title == '') {
      this.toastService.create('请填写视频标题哦');
      return;
    } else if (!this.subTitle || this.subTitle == '') {
      this.toastService.create('请填写视频副标题哦');
      return;
    } else if (!this.description || this.description == '') {
      this.toastService.create('请填写视频描述哦');
      return;
    } else {
      const videoInfo = {
        videoId: this.videoId,
        title: this.title,
        subTitle: this.subTitle,
        description: this.description,
        authorId: this.userId,
        thumbnailUri: this.videoId,
        videoUri: this.videoId + '.mp4'
      }

      this.videoService.publishVideo(videoInfo).subscribe(() => {
        this.toastService.create('发布成功咯');
        history.back();
      });
    }
    
  }
}
