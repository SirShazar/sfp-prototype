import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FileService } from '../services/file.service';
import { NodeInterface } from '../interfaces/node.interface';



@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'icon', 'name', 'size', 'modifiedDate', 'transferStatusMS', 'transferDateMS','transferStatusJPL', 'transferDateJPL'];
  dataSource: MatTableDataSource<NodeInterface>;
  selection: SelectionModel<NodeInterface>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _fileService: FileService) {
  }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    const folders = this._fileService.getFolderNodesByNodeName("");
    if (folders && folders.length > 0) {
      const files = this._fileService.getFolderNodesByNodeName(folders[0].name);
      this.dataSource = new MatTableDataSource(files);
    }

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<NodeInterface>(allowMultiSelect, initialSelection);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: NodeInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name}`;
  }
}
