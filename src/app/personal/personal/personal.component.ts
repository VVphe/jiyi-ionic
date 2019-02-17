import { Component, OnInit, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [ToastService]
})
export class PersonalComponent implements OnInit {

  personal: any;
  userId: any;
  avatorUrl: string

  constructor(
    private storage: Storage, 
    private router: Router, 
    private toastService: ToastService, 
    private alertController: AlertController,
    @Inject('nodeUrl') private nodeUrl
  ) { }

  ngOnInit() {
    Promise.all(
      [
        this.storage.get('userId'),
        this.storage.get('username'),
        this.storage.get('avator')
      ]
    ).then(values => {
      this.userId = values[0];
      this.personal = {
        userId: values[0],
        username: values[1],
        avator: values[2]
      }
      this.avatorUrl = this.nodeUrl + '/users/avator/' + this.userId;
    })

    
  }

  goWorks() {
    console.log('1');
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 0 } })
    )
  }

  goLikes() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 1 } })
    )
  }

  goConcerns() {
    this.router.navigateByUrl(
      this.router.createUrlTree(['concernlist'])
    )
  }

  goUserInfo() {
    console.log(1);
    this.router.navigateByUrl(
      this.router.createUrlTree(['personalDetail/' + this.userId], { queryParams: { type: 0 } })
    )
  }

  logout() {
    Promise.all([
      this.storage.remove('userId'),
      this.storage.remove('username'),
      this.storage.remove('avator')
    ]).then(async () => {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: '您确定要 <strong>退出登录</strong> 吗？',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: '确定',
            handler: () => {
              this.router.navigateByUrl('/login');
              this.toastService.create('您已退出登录');
            }
          }
        ]
      });
  
      await alert.present();
      
    })
    
  }

}
