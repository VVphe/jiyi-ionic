import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, ToastService]
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;

  constructor(
    private router: Router, 
    private toastService: ToastService, 
    private userService: UserService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  login() {
    if (!this.userId || !this.password) {
      this.toastService.create('账号密码还没填写哦～');
    } else {
      this.userService.login(this.userId, this.password).subscribe(res => {
        if (res['message']) {
          this.toastService.create(res['message']);
        } else {
          this.storage.set('userId', res[0].userId);
          this.storage.set('username', res[0].username);
          this.storage.set('avator', res[0].avator);
          this.toastService.create('登录成功');
          this.router.navigateByUrl('/home');
        }
      })
    }
    // this.router.navigateByUrl('/home');
  }

}
