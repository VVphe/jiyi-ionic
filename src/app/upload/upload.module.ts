import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';
import { UploadRoutingModule } from './upload-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule,
    HttpClientModule
  ]
})
export class UploadModule { }
