import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ConfigInterface } from '../interfaces/config.interface';
import { NodeInterface } from '../interfaces/node.interface';
import { PayloadFolderInterface } from '../interfaces/payload-folder.interface';

const payloadFolders: PayloadFolderInterface[] = [
  {
    name: 'Payload 1',
    id: 123,
    email: 'tom@pl1.abc.edu',
    permissions: null,

    isRoot: false,
    size: 0,
    url: null,
    isFolder: true,
    parentNode: 1,
    modifiedDate: (new Date('2019-08-07 01:02:03')).toUTCString(),
    transferStatusMS: null,
    transferStatusJPL: null,
    transferDateMS: null,
    transferDateJPL: null
  },
  {
    name: 'Payload 2',
    id: 234,
    email: 'pl2@researchio.io',
    permissions: [{
      id: 987,
      name: 'PL2 Managers',
      dn: 'a/b/c/PL2 Managers'
    },
    {
      id: 986,
      name: 'PL2 Researchers',
      dn: 'a/b/c/PL2 Researchers'
    }],


    isRoot: false,
    size: 0,
    url: null,
    isFolder: true,
    parentNode: 1,
    modifiedDate: (new Date('2019-08-07 01:03:05')).toUTCString(),
    transferStatusMS: null,
    transferStatusJPL: null,
    transferDateMS: null,
    transferDateJPL: null
  },
  {
    name: 'Payload 3',
    id: 345,
    email: null,
    permissions: null,


    isRoot: false,
    size: 0,
    url: null,
    isFolder: true,
    parentNode: 1,
    modifiedDate: (new Date('2019-08-07 02:03:04')).toUTCString(),
    transferStatusMS: null,
    transferStatusJPL: null,
    transferDateMS: null,
    transferDateJPL: null
  },
  {
    name: 'Payload 4',
    id: 456,
    email: null,
    permissions: null,

    isRoot: false,
    size: 0,
    url: null,
    isFolder: true,
    parentNode: 1,
    modifiedDate: (new Date('2019-08-07 02:04:06')).toUTCString(),
    transferStatusMS: null,
    transferStatusJPL: null,
    transferDateMS: null,
    transferDateJPL: null
  },
];

const otherNodes: NodeInterface[] = [
  {
    name: '/',
    isRoot: true,
    size: 0,
    url: null,
    id: 1,
    isFolder: true,
    parentNode: null,
    modifiedDate: null,
    transferStatusMS: null,
    transferStatusJPL: null,
    transferDateMS: null,
    transferDateJPL: null
  },
  {
    name: 'ephemeris.es',
    isRoot: false,
    size: 100,
    url: 'https://hcmsdex10.hadm.msfc.nasa.gov/AeonPortal/SFT/download?Payload%201/ephemeris.es',
    id: 1234,
    isFolder: false,
    parentNode: 123,
    modifiedDate: (new Date('2019-08-07 09:11:13')).toUTCString(),
    transferStatusMS: "Success",
    transferDateMS: (new Date('2019-09-16 14:15:16')).toUTCString(),
    transferStatusJPL: "Success",
    transferDateJPL: (new Date('2019-09-16 14:15:16')).toUTCString()
  },
  {
    name: 'attitude.es',
    isRoot: false,
    size: 4321,
    url: 'https://hcmsdex10.hadm.msfc.nasa.gov/AeonPortal/SFT/download?Payload%201/attitude.es',
    id: 2345,
    isFolder: false,
    parentNode: 123,
    modifiedDate: (new Date('2019-08-07 08:09:10')).toUTCString(),
    transferStatusMS: "Success",
    transferDateMS: (new Date('2019-08-16 14:15:16')).toUTCString(),
    transferStatusJPL: "Success",
    transferDateJPL: (new Date('2019-08-16 14:15:16')).toUTCString()
  }];

const nodes: NodeInterface[] = otherNodes.concat(payloadFolders);



@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor() { }

  getRootNode(): NodeInterface {
    var node = null;

    var matchingNodes = nodes.filter(node => node.isRoot === true);

    if (matchingNodes.length === 1) {
      node = matchingNodes[0];
    }

    return node;
  }

  getNodeByName(name: string): NodeInterface {
    let node = null;

    if (!name || name.length == 0) name = "/"

    const matchingNodes = nodes.filter(node => node.name == name);
    if (matchingNodes.length === 1) {
      node = matchingNodes[0];
    }

    return node;
  }

  getNodeById(id: number): NodeInterface {
    let node: NodeInterface = null;

    const matchingNodes = nodes.filter(node => node.parentNode == id);
    if (matchingNodes.length === 1) {
      node = matchingNodes[0];
    }

    return node;
  }

  getFolderNodesByNode(parentNode: NodeInterface): NodeInterface[] {
    let matchingNodes: NodeInterface[] = [];

    if (parentNode && parentNode.id) {
      matchingNodes = nodes.filter(node => node.parentNode == parentNode.id);
    }

    return matchingNodes;
  }

  getRootFolders(): NodeInterface[] {
    const rootNode: NodeInterface = this.getRootNode();

    return this.getFolderNodesByNode(rootNode);
  }

  getFolderNodesByNodeName(folder: string): NodeInterface[] {
    const parentNode: NodeInterface = this.getNodeByName(folder);

    return this.getFolderNodesByNode(parentNode);
  }
}
