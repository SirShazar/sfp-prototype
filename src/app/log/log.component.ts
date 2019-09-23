import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { LogEntryInterface } from '../interfaces/log-entry.interface';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  displayedColumns: string[] = ['user', 'file', 'time', 'message'];
  dataSource: MatTableDataSource<LogEntryInterface>;
  selection: SelectionModel<LogEntryInterface>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _logService: LogService) {
  }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    const logEntries = this._logService.getLogEntries({category: 'Payload 1', isInternal: false});
    this.dataSource = new MatTableDataSource(logEntries);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<LogEntryInterface>(allowMultiSelect, initialSelection);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
