import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideoListComponent } from './video-list/video-list.component';
import { EveryPickComponent } from './every-pick/every-pick.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { TranslatePipe } from './translate.pipe';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { UserinfoItemComponent } from './userinfo-item/userinfo-item.component';
import { VideoItemWithDescComponent } from './video-item-with-desc/video-item-with-desc.component';

@NgModule({
  declarations: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent,
    TranslatePipe,
    UserinfoItemComponent,
    VideoItemWithDescComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule
  ],
  exports: [
    VideoListComponent,
    EveryPickComponent,
    VideoItemComponent,
    VideoThumbnailComponent,
    UserinfoItemComponent,
    VideoItemWithDescComponent,
    TranslatePipe,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

    FormsModule
  ]
})
export class SharedModule { }
