import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './common/tab-bar/tab-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { LabelBarComponent } from './common/label-bar/label-bar.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { RecommendComponent } from './recommend/recommend.component';
import { HttpClientModule }    from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FinderComponent } from './finder/finder.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { ConcernComponent } from './concern/concern.component';

@NgModule({
  declarations: [
    TabBarComponent, 
    HomeContentComponent, 
    LabelBarComponent, 
    RecommendComponent, 
    FinderComponent, 
    ListByCategoryComponent, ConcernComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class HomeModule { }
