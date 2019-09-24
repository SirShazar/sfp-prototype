import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileService } from '../services/file.service';
import { LogEntryFilterInterface } from '../interfaces/log-entry.interface';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {
  payloadFolderCtrl = new FormControl();
  allPayloadFolders: string[] = [];

  filter: LogEntryFilterInterface = {};

  payloadFilter: string[] = null;
  messageFilter: string = null;
  userFilter: string = null;

  constructor(private _fileService: FileService) {
  }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    this.allPayloadFolders = this._fileService.getRootFolders().map(folder => folder.name);
    this.allPayloadFolders.unshift("All");
  }

  updateFilter() {
    // this.filter = {};
    // if (this.userFilter && this.userFilter.length > 0) this.filter.author = this.userFilter;
    console.log("in updateFilter");
    console.log(this.filter);
  }

  handleSearch() {
    this.filter = {};
  }
}
