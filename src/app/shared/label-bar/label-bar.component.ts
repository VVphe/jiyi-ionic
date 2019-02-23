import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ImagePickerService } from 'src/app/services/image-picker.service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-label-bar',
  templateUrl: './label-bar.component.html',
  styleUrls: ['./label-bar.component.scss'],
  providers: [ImagePickerService, CameraService]
})
export class LabelBarComponent implements OnInit {

  inProgress = false;
  progress: number;

  constructor(
    private actionSheetController: ActionSheetController, 
    private router: Router,
    private transfer: FileTransfer,
    private cameraService: CameraService,
    private zone: NgZone,
    @Inject('nodeUrl') private nodeUrl
  ) { }

  ngOnInit() {
  }

  async uploadVideo() {
    const actionSheet = await this.actionSheetController.create({
      header: '上传你的视频',
      buttons: [{
        text: '拍摄',
        icon: 'camera',
        handler: () => {
          this.cameraService.record().then(results => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            let options: FileUploadOptions = {
              fileKey: 'videoFile',
              fileName: 'video.mp4',
              mimeType: "video/mp4",
              httpMethod: "POST"
              // headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}
            };
            fileTransfer.upload(results[0].fullPath, this.nodeUrl + '/upload/video', options)
              .then((data) => {
                console.log('videoData',data);
                this.router.navigate(['/upload'], {
                  queryParams: {
                    videoId: data.response
                  }
                });
              });
            fileTransfer.onProgress((progressEvent) => {
              if (progressEvent.lengthComputable) {
                this.zone.run(() => {
                  this.inProgress = true;
                  this.progress = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                  if (this.progress >= 100) {
                    this.progress = 0;
                    this.inProgress = false;
                  }
                })
                
              }
            })
          })
        }
      } ,{
        text: '从相册选择',
        icon: 'images',
        handler: () => {
          this.cameraService.getVideo().then(results => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            let options: FileUploadOptions = {
              fileKey: 'videoFile',
              fileName: 'video.mp4',
              mimeType: "video/mp4",
              httpMethod: "POST"
              // headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}
            };
            fileTransfer.upload(JSON.stringify(results).substring(8, JSON.stringify(results).length - 1), this.nodeUrl + '/upload/video', options)
              .then((data) => {
                console.log('videoData',data);
                this.router.navigate(['/upload'], {
                  queryParams: {
                    videoId: data.response
                  }
                });
              });
            fileTransfer.onProgress((progressEvent) => {
              if (progressEvent.lengthComputable) {
                this.zone.run(() => {
                  this.inProgress = true;
                  this.progress = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                  if (this.progress >= 100) {
                    this.progress = 0;
                    this.inProgress = false;
                  }
                })
                
              }
            })
          })
        }
      }, {
        text: '取消',
        role: 'close',
        icon: 'close',
        handler: () => {
          console.log('cancel');
        }
      }]
    });

    await actionSheet.present();
  }

}
