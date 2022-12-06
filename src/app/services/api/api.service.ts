import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomersResponse} from "../../models/customers-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public getCustomers(results: number, page: number): Observable<CustomersResponse> {
    return this.http.get<CustomersResponse>(`https://randomuser.me/api/?results=${results}&page=${page}`);
  }
}
