import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ]
})
export class PersonalModule { }
