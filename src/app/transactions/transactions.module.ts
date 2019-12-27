import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentsComponent } from './payments/payments.component';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component'

export const routes = [
  { path: '', redirectTo: 'invoice', pathMatch: 'full' },
  { path: 'invoice', component: InvoiceComponent, pathMatch: 'full', data : { breadcrumb : 'Invoice'} },
  { path: 'payments', component:PaymentsComponent, pathMatch: 'full', data: { breadcrumb: 'Payments'} },
];

@NgModule({
  declarations: [ InvoiceComponent, PaymentsComponent,TransactionsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TransactionsModule { }
