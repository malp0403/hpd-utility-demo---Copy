import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { MOCK_TABLE_DATA } from './hpd-table-mock-data';
import { MatTooltipModule } from '@angular/material/tooltip';


export class HpdTableConfig {
  columnPropertyNames: string[] = [];
  columnDisplayNames: string[] = [];
  length: number = 50;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 25];
  hidePageSize: boolean = false;
  showPageSizeOptions: boolean = true;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;
}


@Component({
  selector: 'lib-hpd-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule,MatTooltipModule,MatPaginatorModule],
  templateUrl: './hpd-table.component.html',
  styleUrls: ['./hpd-table.component.scss']
})
export class HpdTableComponent implements OnInit, OnDestroy {
  private readonly _destroyed$: Subject<void> = new Subject();
  @Input() hpdTableConfig: HpdTableConfig = new HpdTableConfig();
  @Input() dataSource: any[] = MOCK_TABLE_DATA; // can set to [] when use in real project

  data:any[] = [];
  columnPropertyNames: string[] = ['position', 'name', 'weight', 'symbol'];
  columnDisplayNames: string[] = ['No.', 'Name', 'Weight', 'Symbol'];
  length = 52;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;
  @ViewChild('paginator') paginator?:MatPaginator

  ngOnInit(): void {
    this.data = this.dataSource.slice(this.pageIndex,this.pageSize);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let startIndex = this.pageIndex ==0? 0:this.pageIndex*this.pageSize;
    this.data = this.dataSource.slice(startIndex,startIndex+this.pageSize);

  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }



  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}

