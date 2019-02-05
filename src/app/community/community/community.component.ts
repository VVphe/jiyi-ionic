import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  typeList: any;
  communityVideos: any;

  constructor() { }

  ngOnInit() {
    this.typeList = [
      {
        type: 'recommend',
        background: '../../../assets/icon/page-1.png',
        text: '推荐'
      },
      {
        type: 'nature',
        background: '../../../assets/icon/page-1.png',
        text: '日月星光'
      },
      {
        type: 'world',
        background: '../../../assets/icon/page-1.png',
        text: '奇妙世界'
      },
      {
        type: 'city',
        background: '../../../assets/icon/page-1.png',
        text: '都市'
      },
      {
        type: 'film',
        background: '../../../assets/icon/page-1.png',
        text: '电影'
      }
    ]

    this.communityVideos = [
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png'
      },
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png',
        labels: ['日月星光', '星辰大海']
      },
      {
        avatorUri: '../../../assets/icon/page-1.png',
        title: 'test',
        subTitle: 'test',
        description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        thumbnailUri: '../../../assets/icon/page-1.png'
      }
    ]
  }

}
