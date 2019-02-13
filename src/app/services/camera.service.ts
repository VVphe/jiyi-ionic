import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions } from '@ionic-native/video-capture-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera, private capture: VideoCapturePlus) { }

  getVideo() {
    // 设置选项
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.VIDEO
    }

    return new Promise((resolve, reject) => {
      this.camera.getPicture(options).then((results) => {
        resolve(results);
      }, (err) => { 
        reject(err)
      });
    });
  }

  record() {
    const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: true
    }

    return new Promise((resolve, reject) => {
      this.capture.captureVideo(options).then(results => {
        resolve(results);
      }, err => {
        reject(err);
      })
    })
  }
}
