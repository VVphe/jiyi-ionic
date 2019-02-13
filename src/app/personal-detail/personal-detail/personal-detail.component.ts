import { Component, OnInit, ViewChild, ElementRef, Inject, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { ImagePickerService } from 'src/app/services/image-picker.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  providers: [UserService, ImagePickerService, ImagePicker, ToastService]
})
export class PersonalDetailComponent implements OnInit {

  personal: any;
  videos: any;
  type = 0;

  works = null;
  likes = null;

  editedDesc: any;
  showEdit = false;

  currentUserId: string;

  avatorUrl: string;

  @ViewChild('descInput')
  descInput: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private userService: UserService, 
    private storage: Storage, 
    private imagePickerService: ImagePickerService,
    private actionSheetController: ActionSheetController,
    private base64: Base64,
    private transfer: FileTransfer,
    private File: File,
    private toastService: ToastService,
    private zone: NgZone,
    @Inject('nodeUrl') private nodeUrl
  ) { }

  ngOnInit() {

    this.userService.getUserInfoOf(this.activatedRoute.snapshot.params['userId']).subscribe(info => {
      this.personal = {
        userId: info['userId'],
        avator: info['avator'],
        username: info['username'],
        description: info['description']
      }
    })

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.type) {
        this.type = params.type;
        if (this.type == 0) {
          this.getWorks();
        } else {
          this.getLikes();
        }
      } else {
        this.getWorks();
      }
    })

    this.storage.get('userId').then(value => {
      this.currentUserId = value;
      this.avatorUrl = this.nodeUrl + '/users/avator/' + this.currentUserId;
    })

  }

  changeType(type) {
    this.type = type;
    if (this.type == 0) {
      this.getWorks();
    } else {
      this.getLikes();
    }
  }

  getWorks() {
    if (!this.works) {
      this.userService.getWorksOf(this.activatedRoute.snapshot.params['userId']).subscribe(videos => {
        this.videos = videos;
        this.works = videos;
      })
    } else {
      this.videos = this.works;
    }
  }

  getLikes() {
    if (!this.likes) {
      this.userService.getLikesOf(this.activatedRoute.snapshot.params['userId']).subscribe(videos => {
        this.videos = videos;
        this.likes = videos;
      })
    } else {
      this.videos = this.likes;
    }
  }

  goBack() {
    history.go(-1);
  }

  editDesc() {
    this.storage.get('userId').then(value => {
      if (value == this.personal.userId) {
        this.showEdit = true;
        this.descInput.nativeElement.focus();
      }
    })
  }

  finishEdit(event) {
    if (event.key == 'Enter') {
      if (this.editedDesc == this.personal.description || this.editedDesc == '') {
        this.showEdit = false;
        this.editedDesc = '';
      } else {
        this.userService.updateDesc(this.personal.userId, this.editedDesc).subscribe(() => {
          this.showEdit = false;
          this.personal.description = this.editedDesc;
          this.editedDesc = '';
        })
      }
    }
  }

  async selectAcator() {
    // this.imagePickerService.imgPicker().then(results => {
    //   console.log(results);
    // })
    if (this.currentUserId != this.personal.userId) {
      return;
    }
    const actionSheet = await this.actionSheetController.create({
      header: '更换头像',
      buttons: [{
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
                userId: this.currentUserId
              },
              // headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}
            };
            fileTransfer.upload(results[0], this.nodeUrl + '/upload/avator', options)
              .then((data) => {
                this.zone.run(() => {
                  this.avatorUrl = this.nodeUrl + '/users/avator/' + this.currentUserId + '?random+\=' + Math.random();
                  this.toastService.create('修改头像成功咯');
                })
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
