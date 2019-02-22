import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  thumbnailUri: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject('nodeUrl') private nodeUrl
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      this.thumbnailUri = this.nodeUrl + '/video/thumbnail/' + queryParams.videoId;
    });
  }

}
