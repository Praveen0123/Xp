import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchedulingComponent } from './scheduling.component';

export const routes = [
  { path: '', component:SchedulingComponent, pathMatch: 'full', data: { breadcrumb: 'Scheduling' } },
];

@NgModule({
  declarations: [SchedulingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SchedulingModule { }
