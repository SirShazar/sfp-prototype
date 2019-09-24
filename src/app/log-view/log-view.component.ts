import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  payloadFolderCtrl = new FormControl();
  filteredPayloadFolders: Observable<string[]>;
  payloadFolders: string[] = ['Lemon'];
  allPayloadFolders: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('payloadFolderInput', { static: false }) payloadFolderInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;


  constructor() {
    this.filteredPayloadFolders = this.payloadFolderCtrl.valueChanges.pipe(
      startWith(null),
      map((payloadFolder: string | null) => payloadFolder ? this._filter(payloadFolder) : this.allPayloadFolders.slice()));
  }

  ngOnInit() {
  }




  add(event: MatChipInputEvent): void {
    // Add payloadFolder only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our payloadFolder
      if ((value || '').trim()) {
        this.payloadFolders.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.payloadFolderCtrl.setValue(null);
    }
  }

  remove(payloadFolder: string): void {
    const index = this.payloadFolders.indexOf(payloadFolder);

    if (index >= 0) {
      this.payloadFolders.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.payloadFolders.push(event.option.viewValue);
    this.payloadFolderInput.nativeElement.value = '';
    this.payloadFolderCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allPayloadFolders.filter(payloadFolder => payloadFolder.toLowerCase().indexOf(filterValue) === 0);
  }

}
