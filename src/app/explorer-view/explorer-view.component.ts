import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateFolderDialogComponent } from '../create-folder-dialog/create-folder-dialog.component';
import { UploadFileDialogComponent } from '../upload-file-dialog/upload-file-dialog.component';
import { UtilitiesService } from '../services/utilities.service';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

export interface Section {
  name: string;
  updated: string;
}

export interface Folder extends Section {
  open: boolean;
}

export interface File extends Section {
 size: number;
 transferstatus: string;
 transferdate: string;
}

@Component({
  selector: 'app-explorer-view',
  templateUrl: './explorer-view.component.html',
  styleUrls: ['./explorer-view.component.css']
})
export class ExplorerViewComponent {
  isAdmin: boolean = false;

  direction: string = 'vertical'
  sizes = {
      percent: {
          area1: 70,
          area2: 30,
      },
      pixel: {
          area1: 120,
          area2: '*',
          area3: 160,
      },
  } 

  constructor(public dialog: MatDialog) {
    this.isAdmin = UtilitiesService.getAdminStatus();

    if(this.isAdmin == false){
      this.folders = [
        {
          name: 'Payload 1',
          updated: '5/5/2019 00:00:00',
          open: false
        }
      ];
    }
  }

  openCreateFolderDialog(): void {
    const dialogRef = this.dialog.open(CreateFolderDialogComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');    
    });
  }

  openUploadFileDialog(): void {
    const dialogRef = this.dialog.open(UploadFileDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  folders: Folder[] = [
    {
      name: 'Payload 1',
      updated: '5/5/2019 00:00:00',
      open: true
    },
    {
      name: 'Payload 2',
      updated: '5/5/2019 00:00:00',
      open: false
    },
    {
      name: 'Payload 3',
      updated: '5/5/2019 00:00:00',
      open: false
    },
    {
      name: 'Payload 4',
      updated: '5/5/2019 00:00:00',
      open: false
    }
  ];

  files: File[] = [
    {
      name: 'Ephemeris1.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    },
    {
      name: 'Ephemeris2.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    },
    {
      name: 'Ephemeris3.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    },
    {
      name: 'Ephemeris4.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    },
    {
      name: 'Ephemeris5.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    },
    {
      name: 'Ephemeris6.atl',
      updated: '5/5/2019 00:00:00',
      size: 1024,
      transferstatus: 'Success',
      transferdate: '5/5/2019 00:00:00',
    }
  ];

}
