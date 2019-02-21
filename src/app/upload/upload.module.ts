import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
