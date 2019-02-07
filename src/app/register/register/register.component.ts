import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ToastService, UserService]
})
export class RegisterComponent implements OnInit {

  userId: string;
  username: string;
  password: string;
  passwordCopy: string;

  constructor(private toastService: ToastService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(1);
    if (!this.userId) {
      this.toastService.create('请填写账户～');
      return;
    } else if (!this.username) {
      this.toastService.create('请填写用户名～');
      return;
    } else if (!this.password) {
      this.toastService.create('请填写密码～');
      return;
    } else if (this.password != this.passwordCopy) {
      this.toastService.create('重复密码不正确～');
      return;
    } else {
      this.userService.register(this.userId, this.username, this.password).subscribe((res) => {
        if (res['message']) {
          this.toastService.create(res['message']);
        } else {
          this.toastService.create('注册成功咯');
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

}
