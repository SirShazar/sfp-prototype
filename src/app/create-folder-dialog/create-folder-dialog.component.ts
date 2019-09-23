import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

}

export interface Address {
  name: string;
}

export interface Group {
  name: string;
}

@Component({
  selector: 'app-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
  styleUrls: ['./create-folder-dialog.component.css']
})
export class CreateFolderDialogComponent implements OnInit {

  addresses: Address[] = [
    {name: 'sn@nasa.gov'},
    {name: 'jb@nasa.gov'},
  ];

  groups: Group[] = [
    {name: 'testers'},
    {name: 'pies'},
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}