import { Injectable } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImagePickerService {

  constructor(private imagePicker: ImagePicker) { 
    //获取权限
    this.imagePicker.hasReadPermission().then(result=>{
      if(!result){
          this.imagePicker.requestReadPermission().then(result=>{
            console.log("读取权限:"+result)
          })
      }
    })
  }

  imgPicker():Promise<any>{
    const options = { maximumImagesCount: 1 };//只选择一张图片
    return new Promise((resolve, reject) => {
      this.imagePicker.getPictures(options).then((results) => {
        resolve(results);
      }, (err) => { 
        reject(err)
      });
    });
  }
}
