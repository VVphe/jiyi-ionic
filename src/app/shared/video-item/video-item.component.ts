import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input()
  videoInfo: any;

  @HostListener('click')
  onClick() {
    console.log(this.videoInfo);
  }

  constructor() { }

  ngOnInit() {
  }

  showUserInfo(event: Event) {
    event.stopPropagation()
    console.log('click');
  }

}
