import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

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

  constructor(@Inject('nodeUrl') private nodeUrl) { }

  ngOnInit() {
  }

  replyClick() {
    this.reply.emit();
  }

}
