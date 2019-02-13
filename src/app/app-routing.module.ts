import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'videoplay', loadChildren: './video-play/video-play.module#VideoPlayModule' },
  { path: 'community', loadChildren: './community/community.module#CommunityModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalModule' },
  { path: 'personalDetail', loadChildren: './personal-detail/personal-detail.module#PersonalDetailModule' },
  { path: 'concernlist', loadChildren: './concern-list/concern-list.module#ConcernListModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'disabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
