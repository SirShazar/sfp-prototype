import { Injectable } from '@angular/core';
import { LogEntryInterface, LogEntryFilterInterface } from '../interfaces/log-entry.interface';
import { NodeInterface } from '../interfaces/node.interface';
import { FileService } from './file.service';

const entriesArray: LogEntryInterface[] = [

  // {
  //   id: 1,
  //   isInternal: true,
  //   message: "SFTService started.",
  //   author: "SFTService",
  //   node: null,
  //   loggedDate: "2019-09-18 01:23:45",
  //   category: "SFTService"
  // },
  // {
  //   id: 2,
  //   isInternal: false,
  //   message: "Payload folder 'Payload 1' was created.",
  //   author: "jmdoe",
  //   node: 24,
  //   loggedDate: "2019-09-19 12:34:56",
  //   category: "Payload 1"
  // },
  // {
  //   id: 3,
  //   isInternal: false,
  //   message: "Payload folder 'Payload 2' was created.",
  //   author: "jmdoe",
  //   node: 25,
  //   loggedDate: "2019-09-19 12:35:43",
  //   category: "Payload 2"
  // },
  {
    id: 4,
    isInternal: false,
    message: "File 'ephemeris.es' was uploaded to folder 'Payload 1'.",
    author: "masmith",
    node: 26,
    loggedDate: "2019-09-19 23:34:45",
    category: "Payload 1"
  },
  {
    id: 5,
    isInternal: false,
    message: "File 'attitude.es' was uploaded to folder 'Payload 1'.",
    author: "masmith",
    node: 26,
    loggedDate: "2019-09-19 23:34:45",
    category: "Payload 1"
  }
];




@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private _fileService: FileService) {
    // join the nodeName from the nodes list
    entriesArray.map(entry => {
      const node: NodeInterface = this._fileService.getNodeById(entry.node);
      if (node) {
        entry.nodeName = node.name;
      }
    });
  }

  getLogEntries(filter: LogEntryFilterInterface): LogEntryInterface[] {

    let entriesToReturn = entriesArray;

    if (filter.category) {
      entriesToReturn = entriesToReturn.filter(entry => entry.category == filter.category);
    }

    if (filter.isInternal) {
      entriesToReturn = entriesToReturn.filter(entry => entry.isInternal == filter.isInternal);
    }

    if (filter.message) {
      entriesToReturn = entriesToReturn.filter(entry => entry.message.toLowerCase().includes(filter.message.toLowerCase()));
    }

    if (filter.nodeName) {
      entriesToReturn = entriesToReturn.filter(entry => entry.nodeName.toLowerCase().includes(filter.nodeName.toLowerCase()));
    }

    if (filter.loggedDateFrom) {
    }

    if (filter.loggedDateTo) {
    }

    return entriesToReturn;
  }
}
