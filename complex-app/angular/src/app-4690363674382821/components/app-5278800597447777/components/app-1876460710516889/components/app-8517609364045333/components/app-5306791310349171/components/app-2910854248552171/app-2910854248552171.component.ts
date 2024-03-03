import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2910854248552171',
  standalone: true,
  templateUrl: './app-2910854248552171.component.html',
  styleUrl: './app-2910854248552171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2910854248552171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
