import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //modules: Module[] = [ClientSideRowModelModule, SetFilterModule,MenuModule,ColumnsToolPanelModule];

  public modules:any = [
    ClientSideRowModelModule,
    SetFilterModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];

  //public modules: Module[] = ClientSideRowModelModule;

  public columnDefs:any;
  public defaultColDef:any;
  public rowData:any;

  // columnDefs = [
  //   { field: "make", sortable: true, filter: true }, 
  //   { field: "model", sortable: true, filter: true }, 
  //   { field: "price", sortable: true, filter: true }];

  // rowData = [
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 }
  // ];
  
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        filter: 'agSetColumnFilter',
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
      sortable: true,
    };
    this.rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
   }

  //  onGridReady(params:any) {
  //   this.http
  //     .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .subscribe((data) => {
  //       this.rowData = data;
  //     });
  // }

  ngOnInit(): void {

    console.log(this.rowData);

  }

}

var savedMiniFilterText = '';



