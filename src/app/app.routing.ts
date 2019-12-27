import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'instanttransport', 
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './analytics/dashboard/dashboard.module#DashboardModule',pathMatch:"full", data: { breadcrumb: 'Dashboard' }},
            { path: 'fleetDashboard', loadChildren: './fleet-dashboard/fleet-dashboard.module#FleetDashboardModule',pathMatch:"full", data: { breadcrumb: 'Fleet Dashboard' }},
            { path: 'manageusers', loadChildren: './manage-users/manage-users.module#ManageUsersModule', data: { breadcrumb: 'Manage Users' }},
            { path: 'lanes', loadChildren: './lanes/lanes.module#LanesModule', data: { breadcrumb: 'Lanes' }},
            { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsModule', data: { breadcrumb: 'Transactions' }},
            { path: 'scheduling', loadChildren: './scheduling/scheduling.module#SchedulingModule', data: { breadcrumb: 'Scheduling' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
            { path: 'fleet', loadChildren: './fleet/fleet.module#FleetModule', data: { breadcrumb: 'Fleet' }},
            { path: 'loads', loadChildren: './loads/loads.module#LoadsModule', data: { breadcrumb: 'Loads' }},
            { path: 'tripsinvendor', loadChildren: './trips-in-vendor/trips-in-vendor.module#TripsInVendorModule', data: { breadcrumb: 'Vendor Trips' }},
            { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule', data: { breadcrumb: 'Payments' }}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 