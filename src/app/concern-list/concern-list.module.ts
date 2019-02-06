import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcernListComponent } from './concern-list/concern-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConcernListRoutingModule } from './concern-list-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ConcernListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConcernListRoutingModule,
    HttpClientModule
  ]
})
export class ConcernListModule { }
