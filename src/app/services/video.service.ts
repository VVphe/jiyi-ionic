import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(http: HttpClient, @Inject('nodeUrl') nodeUrl) { }

  getEverydayVideo() {
    return {
      "id": "2356",
      "title" : "test",
      "subTitle" : "副标题",
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
            "subTitle" : "副标题",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 2,
            "title" : "test",
            "subTitle" : "副标题",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 3,
            "title" : "test",
            "subTitle" : "副标题",
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
            "subTitle" : "副标题",
            "author" : "vv",
            "thumbnailUri" : "../../../assets/icon/page-1.png",
            "avatorUri": "../../../assets/icon/page-1.png",
            "description" : "test",
            "publishTime" : "2019-01-01 08:08:08",
          },
          {
            "id": 5,
            "title" : "test",
            "subTitle" : "副标题",
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
            "subTitle" : "副标题",
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
            "subTitle" : "副标题",
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
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 2,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 3,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 4,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 5,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 6,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 9,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 10,
        "title" : "test",
        "subTitle" : "副标题",
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
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "subTitle" : "副标题",
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
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "subTitle" : "副标题",
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
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 2,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 3,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 4,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 5,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 6,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 7,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 8,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 9,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 10,
        "title" : "test",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "description" : "test",
        "publishTime" : "2019-01-01 08:08:08",
      },
    ]
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
    return [
      {
        "id": 423,
        "title" : "小雀斑&抖森配音定格动画「早期人类」",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "category": "life",
        "description" : "随着我们心跳的节奏，标志着我们生命的开始。随着旋律起舞，是我们内心的一种本能。而纷繁的世界里，有太多的声音在干扰。短片是德国 THE SAXONS 舞团关于舞蹈的一段精彩宣言",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 424,
        "title" : "小雀斑&抖森配音定格动画「早期人类」",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "category": "life",
        "description" : "随着我们心跳的节奏，标志着我们生命的开始。随着旋律起舞，是我们内心的一种本能。而纷繁的世界里，有太多的声音在干扰。短片是德国 THE SAXONS 舞团关于舞蹈的一段精彩宣言",
        "publishTime" : "2019-01-01 08:08:08",
      },
      {
        "id": 3421,
        "title" : "小雀斑&抖森配音定格动画「早期人类」",
        "subTitle" : "副标题",
        "author" : "vv",
        "thumbnailUri" : "../../../assets/icon/page-1.png",
        "avatorUri": "../../../assets/icon/page-1.png",
        "category": "life",
        "description" : "随着我们心跳的节奏，标志着我们生命的开始。随着旋律起舞，是我们内心的一种本能。而纷繁的世界里，有太多的声音在干扰。短片是德国 THE SAXONS 舞团关于舞蹈的一段精彩宣言",
        "publishTime" : "2019-01-01 08:08:08",
      },
    ]
  }
}
