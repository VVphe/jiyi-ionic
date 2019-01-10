import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  tabs: any;

  constructor() { }

  ngOnInit() {
    this.tabs = [
      {
        name: '关注',
        tabType: 'concern'
      }, 
      {
        name: '发现',
        tabType: 'finder'
      }, 
      {
        name: '推荐',
        tabType: 'recommend'
      }, 
      {
        name: '校园',
        tabType: 'campus'
      },
      {
        name: '科技',
        tabType: 'technology'
      },
      {
        name: '生活',
        tabType: 'life'
      },
      {
        name: '音乐',
        tabType: 'music'
      },
      {
        name: '运动',
        tabType: 'sport'
      },
    ]
  }

}
