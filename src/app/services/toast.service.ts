import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async create(message: string) {
    const toastr = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toastr.present();
  }
}
