import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item-with-desc',
  templateUrl: './video-item-with-desc.component.html',
  styleUrls: ['./video-item-with-desc.component.scss']
})
export class VideoItemWithDescComponent implements OnInit {

  @Input()
  videoInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
