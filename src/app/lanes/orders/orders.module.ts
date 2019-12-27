import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FclComponent } from './fcl/fcl.component';
import { DclComponent } from './dcl/dcl.component';
import { BbComponent } from './bb/bb.component';
import { SharedModule } from '../../shared/shared.module';
import { MasterInOrdersComponent } from './master-in-orders/master-in-orders.component';

export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl', component: FclComponent, data : { breadcrumb : 'FCL'} },
  { path: 'lcl', component: DclComponent, data : { breadcrumb : 'LCL'} },
  { path: 'bb', component: BbComponent, data : { breadcrumb : 'BB'} },
];

@NgModule({
  declarations: [FclComponent, DclComponent, BbComponent,MasterInOrdersComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class OrdersModule { }
