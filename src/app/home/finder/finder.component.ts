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
        img: '../../../assets/icon/campus.jpeg'
      },
      {
        name: '科技',
        tabType: 'technology',
        img: '../../../assets/icon/technology.jpg'
      },
      {
        name: '生活',
        tabType: 'life',
        img: '../../../assets/icon/life.jpeg'
      },
      {
        name: '音乐',
        tabType: 'music',
        img: '../../../assets/icon/music.jpeg'
      },
      {
        name: '运动',
        tabType: 'sport',
        img: '../../../assets/icon/sport.jpg'
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
