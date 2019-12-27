import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { FleetVendorsComponent } from './fleet-vendors/fleet-vendors.component';
import { ManageUsersComponent } from './manage-users.component';

export const routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent, pathMatch: 'full', data : { breadcrumb : 'Customers'} },
  { path: 'fleetvendors', component:FleetVendorsComponent, pathMatch: 'full', data: { breadcrumb: 'Fleet Vendors'} },
];

@NgModule({
  declarations: [CustomersComponent, FleetVendorsComponent,ManageUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageUsersModule { }
