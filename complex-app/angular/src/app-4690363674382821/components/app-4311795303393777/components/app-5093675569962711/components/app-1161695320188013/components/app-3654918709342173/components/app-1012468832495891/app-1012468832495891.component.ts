import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1012468832495891',
  standalone: true,
  templateUrl: './app-1012468832495891.component.html',
  styleUrl: './app-1012468832495891.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1012468832495891Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
