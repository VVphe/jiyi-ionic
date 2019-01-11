import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-every-pick',
  templateUrl: './every-pick.component.html',
  styleUrls: ['./every-pick.component.scss']
})
export class EveryPickComponent implements OnInit {

  @Input()
  videoInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
