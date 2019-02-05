import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

const routes: Routes = [
    { path: ':userId', component: PersonalDetailComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalDetailRoutingModule {}
