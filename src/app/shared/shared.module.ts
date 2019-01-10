import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { EveryPickComponent } from './every-pick/every-pick.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent
  ]
})
export class SharedModule { }
