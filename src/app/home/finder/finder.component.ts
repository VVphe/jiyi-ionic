import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  providers: [VideoService]
})
export class FinderComponent implements OnInit {

  categoryList: any;
  rankingVideos: any;

  constructor(private videoServide: VideoService) { }

  ngOnInit() {
    this.categoryList = [
      {
        name: '关注',
        tabType: 'concern',
        img: '../../../assets/icon/page-1.png'
      }, 
      {
        name: '发现',
        tabType: 'finder',
        img: '../../../assets/icon/page-1.png'
      }, 
      {
        name: '推荐',
        tabType: 'recommend',
        img: '../../../assets/icon/page-1.png'
      }, 
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
    this.rankingVideos = this.videoServide.getRankingVideos();
  }

}
