import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { SharedModule } from '../shared/shared.module';
import { CommunityRoutingModule } from './community-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommunityRoutingModule,
    HttpClientModule
  ]
})
export class CommunityModule { }
