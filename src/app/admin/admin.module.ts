import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PreferenceComponent } from './preference/preference.component';
import { AdminComponent } from './admin.component';
import { HubsComponent } from './hubs/hubs.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { LanesComponent } from './lanes/lanes.component';
import { CapacityComponent } from './capacity/capacity.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TatmasterComponent } from './tatmaster/tatmaster.component';
import { BarcodesComponent } from './barcodes/barcodes.component';
import { OffersComponent } from './offers/offers.component';
import { SettingsComponent } from './settings/settings.component';

export const routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full', data : { breadcrumb : 'Profile'} },
  { path: 'preference', component:PreferenceComponent, pathMatch: 'full', data: { breadcrumb: 'Preference'} },
  { path: 'hubs', component: HubsComponent, pathMatch: 'full', data : { breadcrumb : 'Hubs'} },
  { path: 'gateways', component:GatewaysComponent, pathMatch: 'full', data: { breadcrumb: 'Gateways'} },
  { path: 'lanes', component: LanesComponent, pathMatch: 'full', data : { breadcrumb : 'Lanes'} },
  { path: 'capacity', component:CapacityComponent, pathMatch: 'full', data: { breadcrumb: 'Capacity'} },
  { path: 'schedule', component: ScheduleComponent, pathMatch: 'full', data : { breadcrumb : 'Schedule'} },
  { path: 'tatmaster', component:TatmasterComponent, pathMatch: 'full', data: { breadcrumb: 'TAT Master'} },
  { path: 'barcodes', component: BarcodesComponent, pathMatch: 'full', data : { breadcrumb : 'Barcodes'} },
  { path: 'offers', component:OffersComponent, pathMatch: 'full', data: { breadcrumb: 'Offers'} },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full', data : { breadcrumb : 'Settings'} },
];

@NgModule({
  declarations: [ProfileComponent, PreferenceComponent,AdminComponent, HubsComponent, GatewaysComponent, LanesComponent, CapacityComponent, ScheduleComponent, TatmasterComponent, BarcodesComponent, OffersComponent, SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
