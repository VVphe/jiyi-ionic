import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from "moment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient, @Inject('nodeUrl') private nodeUrl) { }

  getEverydayVideo() {
    const params = new HttpParams()
      .set('publishTime', moment().format('YYYY-MM-DD'));

    return this.http.get(this.nodeUrl + '/recommend/everydayPick', { params });
  }

  getCategoryVideos() {
    const params = new HttpParams()
      .set('publishTime', moment().format("YYYY-MM-DD"));
    return this.http.get(this.nodeUrl + '/recommend', { params });
  }

  getRankingVideos() {
    return this.http.get(this.nodeUrl + '/recommend/rank');
  }

  getLatestPopularVideos(category: string) {
    const params = new HttpParams()
      .set('category', category);
    return this.http.get(this.nodeUrl + '/category/latestPopulor', { params });
    // return [
    //   {
    //     "id": 6,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    //   {
    //     "id": 7,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    //   {
    //     "id": 8,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    // ]
  }

  getPopularVideos(category: string) {
    const params = new HttpParams()
      .set('category', category);
    return this.http.get(this.nodeUrl + '/category/populor', { params });
    // return [
    //   {
    //     "id": 6,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    //   {
    //     "id": 7,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    //   {
    //     "id": 8,
    //     "title" : "test",
    //     "subTitle" : "副标题",
    //     "author" : "vv",
    //     "thumbnailUri" : "../../../assets/icon/page-1.png",
    //     "avatorUri": "../../../assets/icon/page-1.png",
    //     "description" : "test",
    //     "publishTime" : "2019-01-01 08:08:08",
    //   },
    // ]
  }

  getLatestVideos(category: string) {
    const params = new HttpParams()
      .set('category', category);
    return this.http.get(this.nodeUrl + '/category/latest', { params });
  }

  getVideoDetail(videoId: number) {
    return {
      "id": videoId,
      "title" : "超然影视混剪：坚持不懈的完美",
      "subTitle" : "副标题",
      "thumbnailUri" : "../../../assets/icon/page-1.png",
      "videoUri": "http://static.videogular.com/assets/videos/videogular.mp4",
      "category": "life",
      "description" : "随着我们心跳的节奏，标志着我们生命的开始。随着旋律起舞，是我们内心的一种本能。而纷繁的世界里，有太多的声音在干扰。短片是德国 THE SAXONS 舞团关于舞蹈的一段精彩宣言。",
      "commentsCount": 3130
    }
  }

  getRecommendsOf(category: string) {
    const params = new HttpParams().set('category', category);
    return <Observable<any[]>>this.http.get(this.nodeUrl + '/category', { params });
  }

  likeVideo(videoInfo: any) {
    return this.http.post(this.nodeUrl + '/operates/like', videoInfo);
  } 

  starVideo(userId: String, videoId: String) {
    return this.http.post(this.nodeUrl + '/operates/star', {
      userId: userId,
      videoId: videoId
    })
  }

  getCommunityVideos(label) {
    if (label == 'recommend') {
      return this.http.get(this.nodeUrl + '/community/recommend');
    } else {
      const params = new HttpParams().set('label', label);
      return this.http.get(this.nodeUrl + '/community/label', { params });
    }
  }
}
