import { Component, OnInit, Inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ImagePickerService } from 'src/app/services/image-picker.service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-label-bar',
  templateUrl: './label-bar.component.html',
  styleUrls: ['./label-bar.component.scss'],
  providers: [ImagePickerService]
})
export class LabelBarComponent implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController, 
    private imagePickerService: ImagePickerService,
    private transfer: FileTransfer,
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
          console.log('camera');
        }
      } ,{
        text: '从相册选择',
        icon: 'images',
        handler: () => {
          this.imagePickerService.imgPicker().then(results => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            let options: FileUploadOptions = {
              fileKey: 'imgFile',
              fileName: 'avator.jpg',
              mimeType: "image/jpeg'",
              httpMethod: "POST",
              params: {

              },
              // headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}
            };
            fileTransfer.upload(results[0], this.nodeUrl + '/upload/avator', options)
              .then((data) => {
              });
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
