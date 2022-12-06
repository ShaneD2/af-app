import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule, NbSpinnerModule,
  NbToastrModule
} from "@nebular/theme";
import {AgGridModule} from "ag-grid-angular";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NbActionsModule,
    NbCardModule,
    NbInputModule,
    AgGridModule,
    NbToastrModule,
    NbIconModule,
    NbSelectModule,
    NbButtonModule,
    NbSpinnerModule,
    NbToastrModule.forRoot()
  ]
})
export class CustomersModule { }
