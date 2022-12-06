import { Injectable } from '@angular/core';
import {Customer} from "../../models/customers-response";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer: Customer | null = null;

  constructor() { }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomer(): Customer | null {
    return this.customer;
  }
}
