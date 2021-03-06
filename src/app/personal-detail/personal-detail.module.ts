import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PersonalDetailRoutingModule } from './personal-detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonalDetailComponent],
  imports: [
    CommonModule,
    PersonalDetailRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PersonalDetailModule { }
