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
            "id": 1,
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 2,
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 3,
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
            "id": 4,
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 5,
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
            "id": 6,
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 7,
            "title" : "test",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 8,
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

  getRankingVideos() {
    return [
      {
        "id": 1,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 2,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 3,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 4,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 5,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 6,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 9,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 10,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      }
    ]
  }

  getLatestPopularVideos(category: string) {
    return [
      {
        "id": 6,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
    ]
  }

  getPopularVideos(category: string) {
    return [
      {
        "id": 6,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
    ]
  }

  getLatestVideos(category: string) {
    return [
      {
        "id": 1,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 2,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 3,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 4,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 5,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 6,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 9,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 10,
        "title" : "test",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
    ]
  }
}
