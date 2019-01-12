import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';
import { RecommendComponent } from './recommend/recommend.component';
import { FinderComponent } from './finder/finder.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeContentComponent ,
        children: [
            {path: '', redirectTo: 'recommend', pathMatch: 'full'},
            {path: 'recommend', component: RecommendComponent},
            {path: 'finder', component: FinderComponent},
            {path: ':category', component: ListByCategoryComponent}
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
