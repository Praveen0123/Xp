import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FclComponent } from './fcl/fcl.component';
import { DclComponent } from './dcl/dcl.component';
import { BbComponent } from './bb/bb.component';
import { SharedModule } from '../../shared/shared.module';
import { MasterInTripsComponent } from './master-in-trips/master-in-trips.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LclDetailsComponent } from './lcl-details/lcl-details.component';
import { BbDetailsComponent } from './bb-details/bb-details.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { TrackingComponent } from './fcl/tracking/tracking.component';
import { NetworkComponent } from './fcl/network/network.component';

export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl', component: FclComponent, data : { breadcrumb : 'FCL'} },
  { path: 'lcl', component: DclComponent, data : { breadcrumb : 'LCL'} },
  { path: 'bb', component: BbComponent, data : { breadcrumb : 'BB'} },
  { path: 'lcl/lcldetails', component: LclDetailsComponent, data : { breadcrumb : 'LCL Details'} },
  { path: 'fcl/maps', component: GoogleMapsComponent, data : { breadcrumb : 'Maps'} },
  
];

@NgModule({
  declarations: [FclComponent, DclComponent, BbComponent, MasterInTripsComponent, LineGraphComponent, PieChartComponent, LclDetailsComponent, BbDetailsComponent, GoogleMapsComponent, TrackingComponent, NetworkComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgxChartsModule,ConfirmationPopoverModule,AgmCoreModule
  ],
  entryComponents:[TrackingComponent,NetworkComponent]
})
export class TripsModule { }
