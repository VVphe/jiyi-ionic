import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
  providers: [VideoService]
})
export class CommunityComponent implements OnInit {

  typeList: any;
  communityVideos: any;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.typeList = [
      {
        type: 'recommend',
        background: '../../../assets/icon/Group 6@3x.png',
        text: '推荐'
      },
      {
        type: 'nature',
        background: '../../../assets/icon/Group 6 Copy@3x.png',
        text: '日月星光'
      },
      {
        type: 'world',
        background: '../../../assets/icon/Group 6 Copy 2@3x.png',
        text: '奇妙世界'
      },
      {
        type: 'city',
        background: '../../../assets/icon/Group 6 Copy 3@3x.png',
        text: '都市'
      },
      {
        type: 'film',
        background: '../../../assets/icon/page-1.png',
        text: '电影'
      }
    ]

    this.videoService.getCommunityVideos('recommend').subscribe(videos => {
      this.communityVideos = videos;
    })
  }

  chooseLabel(label) {
    this.videoService.getCommunityVideos(label).subscribe(videos => {
      this.communityVideos = videos;
    });
  }

}
