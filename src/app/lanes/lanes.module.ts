import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CapacityComponent } from './capacity/capacity.component';
import { OrdersComponent } from './orders/orders.component';
import { TripsComponent } from './trips/trips.component';

export const routes = [
  { path: '', redirectTo: 'capacity', pathMatch: 'full' },
  { path: 'capacity', component: CapacityComponent, pathMatch: 'full', data : { breadcrumb : 'Capacity'} },
  { path: 'orders', component: OrdersComponent, loadChildren:'./orders/orders.module#OrdersModule' ,  data: { breadcrumb: 'Orders'} },
  { path: 'trips', component: TripsComponent, loadChildren:'./trips/trips.module#TripsModule' ,  data: { breadcrumb: 'Trips'} },
];

@NgModule({
  declarations: [CapacityComponent, OrdersComponent, TripsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LanesModule { }
