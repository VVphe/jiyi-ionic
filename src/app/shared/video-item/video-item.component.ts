import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('videoplay/' + this.videoInfo.id);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showUserInfo(event: Event) {
    event.stopPropagation()
    console.log('click');
  }

}
