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
    this.tabs = ['关注', '发现', '推荐', '校园', '科技', '生活', '音乐', '运动']
  }

}
