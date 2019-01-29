import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayRoutingModule } from './video-play-routing.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoPlayItemComponent } from './video-play-item/video-play-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [
    VideoDetailComponent,
    VideoPlayItemComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    VideoPlayRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class VideoPlayModule { }
