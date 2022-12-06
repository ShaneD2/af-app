import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {Location} from "@angular/common";
import {Customer} from "../../../models/customers-response";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  public customer: Customer | undefined | null;
  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer();
    if (!this.customer) {
      this.location.back();
    }
  }

  goBack() {
    this.location.back();
  }

  call() {
    window.location.href = `tel:${this.customer?.phone}`;
  }

  email() {
    window.location.href = `mailto:${this.customer?.email}`;
  }

}
