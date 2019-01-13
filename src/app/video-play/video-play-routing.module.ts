import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
    { path: ':videoId', component: VideoDetailComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideoPlayRoutingModule {}
