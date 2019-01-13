import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { EveryPickComponent } from './every-pick/every-pick.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { TranslatePipe } from './translate.pipe';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent,
    TranslatePipe,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class SharedModule { }
