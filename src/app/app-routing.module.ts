import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'videoplay', loadChildren: './video-play/video-play.module#VideoPlayModule' },
  { path: 'community', loadChildren: './community/community.module#CommunityModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalModule' },
  { path: 'personalDetail', loadChildren: './personal-detail/personal-detail.module#PersonalDetailModule' },
  { path: 'concernlist', loadChildren: './concern-list/concern-list.module#ConcernListModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
