import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  theme = signal('dark');

  constructor() {}

  setTheme(value: string) {
    // localStorage.setItem('theme', value);
    this.theme.set(value);
  }

  getTheme() {
    return this.theme();
  }
}
