import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-play-item',
  templateUrl: './video-play-item.component.html',
  styleUrls: ['./video-play-item.component.scss']
})
export class VideoPlayItemComponent implements OnInit {

  @Input()
  videoInfo: any;

  @Input()
  stared: boolean;

  @Input()
  liked: boolean;

  @Output()
  showComments = new EventEmitter();

  @Output()
  like = new EventEmitter();

  @Output()
  star = new EventEmitter();

  isPlaying = false;
  api: VgAPI;

  constructor(@Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
  }

  play() {
    this.isPlaying = true;
    if (this.api) {
      this.api.play();
    }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  showCommentsClick() {
    this.showComments.emit();
  }

  likeClick() {
    this.like.emit();
    this.liked = true;
  }

  starClick() {
    this.star.emit();
    this.stared = true;
  }

}
