import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.scss'],
  providers: [VideoService]
})
export class ListByCategoryComponent implements OnInit {

  latestPopularVideos: any;
  popularVideos: any;
  latestVideos: any;

  constructor(private routerInfo: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit() {
    let category = this.routerInfo.snapshot.params['category'];
    this.latestPopularVideos = this.videoService.getLatestPopularVideos(category);
    this.popularVideos = this.videoService.getPopularVideos(category);
    this.latestVideos = this.videoService.getLatestVideos(category);
  }

}
