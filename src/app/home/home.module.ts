import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { LabelBarComponent } from './label-bar/label-bar.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [
    TabBarComponent, 
    HomeContentComponent, LabelBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class HomeModule { }
