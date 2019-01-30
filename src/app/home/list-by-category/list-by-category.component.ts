import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';


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
    this.videoService.getLatestPopularVideos(category).subscribe(videos => {
      this.latestPopularVideos = videos;
    });
    this.videoService.getPopularVideos(category).subscribe(videos => {
      this.popularVideos = videos;
    });
    
    this.videoService.getLatestVideos(category).subscribe(videos => {
      this.latestVideos = videos;
    });
  }

}
