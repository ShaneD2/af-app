import {Component, OnDestroy, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NbToastrService} from "@nebular/theme";
import {Customer} from "../../models/customers-response";
import {ApiService} from "../../services/api/api.service";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
  selector: 'app-customers1',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnDestroy {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  public loading: boolean = true;
  public searchParams: {results: number, page: number} = {results: 20, page: 1};

  // Data that will be displayed in the grid
  public rowData: Customer[] = [];

  // Column definitions for AG grid
  public columnDefs: ColDef[] = [
    { headerName: 'Name', minWidth: 250, resizable: true, valueGetter: (params) => {return `${params?.data?.name?.title} ${params?.data?.name?.first} ${params?.data?.name?.last}`}},
    { field: 'location.country', minWidth: 200, resizable: true, headerName: 'Country'},
    { field: 'location.state', minWidth: 200, resizable: true, headerName: 'State'},
    { field: 'location.city', minWidth: 200, resizable: true, headerName: 'City'},
    { field: 'dob.age', minWidth: 80, resizable: true, headerName: 'Age', filter: 'agNumberColumnFilter'},
    { field: 'gender', minWidth: 200, resizable: true},
  ];
  public defaultColDef: ColDef = {sortable: true, filter: true};

  // Get updated query params and search for customers1
  public activatedRouteSubscription: Subscription = this.activatedRoute.queryParams.subscribe(params => {
    this.searchParams.results = (!Number.isNaN(Number(params?.['results']))) ? +params?.['results'] : 20;
    this.searchParams.page = (!Number.isNaN(Number(params?.['page']))) ? +params?.['page'] : 1;
    this.getCustomers();
  });

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
  }

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private toastService: NbToastrService
  ) {}

  getCustomers() {
    this.apiService.getCustomers(this.searchParams.results, this.searchParams.page).subscribe(res => {
      this.rowData = res?.results;
      this.loading = false;
    }, error => {
      this.toastService.danger('Could not load customers1. Please try again.', 'Oops... Something went wrong', {preventDuplicates: true, duration: 0});
      this.loading = false;
    });
  }

  onCellClicked(e: CellClickedEvent) {
    this.customerService.setCustomer(e.data);
    this.router.navigateByUrl('/customers/customer-details');
  }

  resizeGrid() {
    this.agGrid.api.sizeColumnsToFit();
  }

  updateUrl() {
    this.loading = true;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        results: this.searchParams.results,
        page: this.searchParams.page
      },
      replaceUrl: true,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  nextPage() {
    this.searchParams.page += 1;
    this.updateUrl();
  }

  previousPage() {
    this.searchParams.page -= 1;
    this.updateUrl();
  }

}
