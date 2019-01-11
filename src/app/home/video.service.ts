import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(http: HttpClient, @Inject('nodeUrl') nodeUrl) { }

  getEverydayVideo() {
    return {
      "title" : "test",
      "author" : "vv",
      "thumbnailUri" : "../../../assets/icon/page-1.png",
      "avatorUri": "../../../assets/icon/page-1.png",
      "description" : "test",
      "publishTime" : "2019-01-01 08:08:08",
    }
  }

  getCategoryVideos() {
    //TODO:
    return [
      {
        category: 'music',
        videos: [
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          }
        ]
      },
      {
        category: 'sport',
        videos: [
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
        ]
      },
      {
        category: 'campus',
        videos: [
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
        ]
      }
    ]
  }
}
