import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  providers: [UserService]
})
export class PersonalDetailComponent implements OnInit {

  personal: any;
  videos: any;
  type = 0;

  works = null;
  likes = null;

  editedDesc: any;
  showEdit = false;

  @ViewChild('descInput')
  descInput: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private storage: Storage) { }

  ngOnInit() {

    this.userService.getUserInfoOf(this.activatedRoute.snapshot.params['userId']).subscribe(info => {
      this.personal = {
        userId: info['userId'],
        avator: info['avator'],
        username: info['username'],
        description: info['description']
      }
    })

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.type) {
        this.type = params.type;
        if (this.type == 0) {
          this.getWorks();
        } else {
          this.getLikes();
        }
      } else {
        this.getWorks();
      }
    })

  }

  changeType(type) {
    this.type = type;
    if (this.type == 0) {
      this.getWorks();
    } else {
      this.getLikes();
    }
  }

  getWorks() {
    if (!this.works) {
      this.userService.getWorksOf(this.activatedRoute.snapshot.params['userId']).subscribe(videos => {
        this.videos = videos;
        this.works = videos;
      })
    } else {
      this.videos = this.works;
    }
  }

  getLikes() {
    if (!this.likes) {
      this.userService.getLikesOf(this.activatedRoute.snapshot.params['userId']).subscribe(videos => {
        this.videos = videos;
        this.likes = videos;
      })
    } else {
      this.videos = this.likes;
    }
  }

  goBack() {
    history.go(-1);
  }

  editDesc() {
    this.storage.get('userId').then(value => {
      if (value == this.personal.userId) {
        this.showEdit = true;
        this.descInput.nativeElement.focus();
      }
    })
  }

  finishEdit() {
    if (this.editedDesc == this.personal.description || this.editedDesc == '') {
      this.showEdit = false;
      this.editedDesc = '';
    } else {
      this.userService.updateDesc(this.personal.userId, this.editedDesc).subscribe(() => {
        this.showEdit = false;
        this.personal.description = this.editedDesc;
        this.editedDesc = '';
      })
    }
  }

}
