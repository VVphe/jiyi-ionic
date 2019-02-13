import { Component, OnInit, Inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ImagePickerService } from 'src/app/services/image-picker.service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-label-bar',
  templateUrl: './label-bar.component.html',
  styleUrls: ['./label-bar.component.scss'],
  providers: [ImagePickerService, CameraService]
})
export class LabelBarComponent implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController, 
    private imagePickerService: ImagePickerService,
    private transfer: FileTransfer,
    private cameraService: CameraService,
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
            console.log(results);
          })
        }
      } ,{
        text: '从相册选择',
        icon: 'images',
        handler: () => {
          this.cameraService.getVideo().then(results => {
            console.log(results);
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
