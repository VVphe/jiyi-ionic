import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NotificationComponent, NotificationItemComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class NotificationModule { }
