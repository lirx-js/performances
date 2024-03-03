import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-732384800218609',
  standalone: true,
  templateUrl: './app-732384800218609.component.html',
  styleUrl: './app-732384800218609.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App732384800218609Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
