import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, @Inject('nodeUrl') private nodeUrl) { }

  getComments(videoId: string) {
    let params = new HttpParams().set('videoId', videoId);
    return this.http.get(this.nodeUrl + '/operates/comments', { params });
    // return [
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 2,
    //     username: '黄超',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条回复',
    //     type: 'reply',
    //     commentContent: '这是一条评论',
    //     commentUserId: 1,
    //     commentUsername: '蒋鹏威',
    //     commentAvator: '../../../assets/icon/page-1.png',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   },
    //   {
    //     userId: 1,
    //     username: '蒋鹏威',
    //     avator: '../../../assets/icon/page-1.png',
    //     content: '这是一条评论',
    //     type: 'comment',
    //     date: '2019-01-19'
    //   }
    // ]
  }

  publishComment(videoId: String, userId: String, username: String, avator: String, content: String) {
    return this.http.post(this.nodeUrl + '/operates/comment', {
      videoId: videoId,
      userId: userId,
      username: username,
      avator: avator,
      content: content
    });
  }

  publishReply(videoId: String, userId: String, username: String, avator: String, content: String, commentContent: String, commentUserId: String, commentUsername: String, commentAvator: String) {
    return this.http.post(this.nodeUrl + '/operates/reply', {
      videoId: videoId,
      userId: userId,
      username: username,
      avator: avator,
      content: content,
      commentContent: commentContent,
      commentUserId: commentUserId,
      commentUsername: commentUsername,
      commentAvator: commentAvator
    })
  }
}
