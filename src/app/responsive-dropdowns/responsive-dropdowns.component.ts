import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GridOptions } from 'ag-grid-community';
import { ApiRestCallsService } from '../api-rest-calls.service';

@Component({
  selector: 'app-responsive-dropdowns',
  templateUrl: './responsive-dropdowns.component.html',
  styleUrls: ['./responsive-dropdowns.component.scss'],
})
export class ResponsiveDropdownsComponent implements OnInit {
  distinctDoctypes: any[] = [];
  selectedDocType: any;
  docTypesForm: NgForm | undefined;
  totalDocTypes: any = 0;

  // AG-Grid - Initializations;
  gridApi: any;
  gridColumnApi: any;
  selected_row_data: any[] = [];
  public gridOptions!: GridOptions;
  columnDefs: any;
  rowData: any;
  tableData: any;

  constructor(private apiRestService: ApiRestCallsService) {}

  ngOnInit(): void {
    // this will all onloading of the page and getting the available doctypes. It may contain the duplicates.
    // once got the response - lets filter and remove the duplicates and assign it to the varibale so that it can display on screen
    this.apiRestService.getDoctypes().subscribe((data) => {
      if (data) {
        this.distinctDoctypes = data.docTypes; // In JSON file defined the key as this.
        let unique_doctypes = this.distinctDoctypes.filter(
          (c: any, index: any) => {
            return this.distinctDoctypes.indexOf(c) === index;
          }
        );
        this.distinctDoctypes = unique_doctypes;
      }
    });
  }

  docTypeSelection() {
    this.apiRestService.fetchDoctypeResults().subscribe((data) => {
      if (data) {
        data.forEach(
          (element: { docTypeName: any; values: string | any[] }) => {
            if (element.docTypeName === this.selectedDocType) {
              this.totalDocTypes = element.values.length;
              this.tableData = element.values;
              if(this.tableData && this.tableData.length >0) {
              this.setupGridTableData();
              } else {
                this.rowData = [];
              }
            }
          }
        );
      }
    });
  }
  setupGridTableData() {
    const columns = Object.keys(this.tableData[0]); // so this assigns all the column names. no hard code of columns names.
    this.rowData = this.tableData;
    this.columnDefs = columns.map((field) => ({
      field,
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: false,
      hide: false,
    }));

    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowHeight: 40,
      rowSelection: 'single',
      minColWidth: 300,
      pagination: true,
      paginationAutoPageSize: true,
      enableCellTextSelection: true,
      suppressFocusAfterRefresh: true,
    };
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(event: any) {
    this.selected_row_data = this.gridApi.getSelectedRows();
    this.fetchUUIDResults(this.selected_row_data[0].uuid);
  }

  fetchUUIDResults(uuid: any) {
    this.apiRestService.fetchUUIDResults()
    .subscribe((data: string | any[])=> {
      if(data && data.length > 0 ) {
       
      }
    })
  }
  
}
 
