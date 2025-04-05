import { Injectable } from '@angular/core';
import { ICustomLocalStorage } from '../Models/ICustomLocalStorage';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  private localStorage: ICustomLocalStorage = window.localStorage;

  get(key: any): any {
    try {
      return JSON.parse(this.localStorage.getItem(key));
    } catch (e) {
      console.error('Error occurs during getting data from LocalStorage', e);
      return null;
    }
  }

  set(key: string, data: any): void {
    try {
      this.localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error occurs during saving data in LocalStorage', e);
    }
  }
}
