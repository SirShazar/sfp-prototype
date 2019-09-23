import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  static isAdmin: boolean = true;

  static getAdminStatus(): boolean {
    return this.isAdmin;
  }

  constructor() { }
}
