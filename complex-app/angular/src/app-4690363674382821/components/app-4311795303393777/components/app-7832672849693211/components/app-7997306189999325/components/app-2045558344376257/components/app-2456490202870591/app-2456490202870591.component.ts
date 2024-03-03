import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2456490202870591',
  standalone: true,
  templateUrl: './app-2456490202870591.component.html',
  styleUrl: './app-2456490202870591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2456490202870591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
