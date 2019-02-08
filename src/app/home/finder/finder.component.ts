import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  providers: [VideoService]
})
export class FinderComponent implements OnInit {

  categoryList: any;
  rankingVideos: any;

  constructor(private videoServide: VideoService, private router: Router) { }

  ngOnInit() {
    this.categoryList = [
      {
        name: '校园',
        tabType: 'campus',
        img: '../../../assets/icon/page-1.png'
      },
      {
        name: '科技',
        tabType: 'technology',
        img: '../../../assets/icon/page-1.png'
      },
      {
        name: '生活',
        tabType: 'life',
        img: '../../../assets/icon/page-1.png'
      },
      {
        name: '音乐',
        tabType: 'music',
        img: '../../../assets/icon/page-1.png'
      },
      {
        name: '运动',
        tabType: 'sport',
        img: '../../../assets/icon/page-1.png'
      },
    ]
    this.videoServide.getRankingVideos().subscribe(rankingVideos => {
      this.rankingVideos = rankingVideos;
    });
  }

  goCategory(category) {
    this.router.navigateByUrl('/home/' + category.tabType);
  }

}
