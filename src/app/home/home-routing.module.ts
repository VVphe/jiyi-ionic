import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';
import { RecommendComponent } from './recommend/recommend.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeContentComponent ,
        children: [
            {path: '', redirectTo: 'recommend', pathMatch: 'full'},
            {path: 'recommend', component: RecommendComponent}
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
