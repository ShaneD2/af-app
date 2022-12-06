import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customer-details', component: CustomerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
