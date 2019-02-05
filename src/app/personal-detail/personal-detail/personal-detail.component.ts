import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  personal: any;
  videos: any;
  type = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.personal = {
      userId: '1234532532',
      avator: '../../../assets/icon/page-1.png',
      username: '蒋鹏威'
    }

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.type) {
        this.type = params.type;
      }
    })

    this.videos = [
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

  changeType(type) {
    this.type = type;
  }

}
