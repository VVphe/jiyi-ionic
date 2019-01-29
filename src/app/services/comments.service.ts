import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(http: HttpClient, @Inject('nodeUrl') nodeUrl) { }

  getComments(videoId: number) {
    return [
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 2,
        username: '黄超',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条回复',
        type: 'reply',
        commentContent: '这是一条评论',
        commentUserId: 1,
        commentUsername: '蒋鹏威',
        commentAvator: '../../../assets/icon/page-1.png',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      },
      {
        userId: 1,
        username: '蒋鹏威',
        avator: '../../../assets/icon/page-1.png',
        content: '这是一条评论',
        type: 'comment',
        date: '2019-01-19'
      }
    ]
  }
}
