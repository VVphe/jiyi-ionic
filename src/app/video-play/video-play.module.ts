import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayRoutingModule } from './video-play-routing.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoPlayItemComponent } from './video-play-item/video-play-item.component';

@NgModule({
  declarations: [
    VideoDetailComponent,
    VideoPlayItemComponent
  ],
  imports: [
    CommonModule,
    VideoPlayRoutingModule
  ]
})
export class VideoPlayModule { }
