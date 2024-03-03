import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2982007941280179',
  standalone: true,
  templateUrl: './app-2982007941280179.component.html',
  styleUrl: './app-2982007941280179.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2982007941280179Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
