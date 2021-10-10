import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent {

    public modules: any = [
      ClientSideRowModelModule,
      SetFilterModule,
      MenuModule,
      ColumnsToolPanelModule,
    ];
  

    public columnDefs:any;
    public defaultColDef:any;
    public rowData:any;
    
    constructor(private http: HttpClient) {
      this.columnDefs = [
        {
          field: 'athlete',
          filter: 'true',
        },
        {
          field: 'country',
          filter: 'true',
        },
        {
          field: 'gold',
          filter: 'true',
        },
        {
          field: 'silver',
          filter: 'true',
        },
        {
          field: 'sport',
          filter: 'true',
        },
        {
          field: 'total',
          filter: 'true',
        }
      ];
      this.defaultColDef = {
        flex: 1,
        minWidth: 150,
        filter: true,
        sortable: true,
      };
     }
  
     onGridReady(params:any) {
      this.http
        .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .subscribe((data) => {
          this.rowData = data;
          console.log(this.rowData);
        });
    }
  
    ngOnInit(): void {
    }

}











