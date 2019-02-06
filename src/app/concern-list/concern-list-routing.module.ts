import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConcernListComponent } from './concern-list/concern-list.component';

const routes: Routes = [
    { path: '', component: ConcernListComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConcernListRoutingModule {}
