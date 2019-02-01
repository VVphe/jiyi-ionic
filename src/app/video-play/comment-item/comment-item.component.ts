import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input()
  commentInfo: any;

  @Output()
  reply = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  replyClick() {
    this.reply.emit();
  }

}
