import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5037833991719837',
  standalone: true,
  templateUrl: './app-5037833991719837.component.html',
  styleUrl: './app-5037833991719837.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5037833991719837Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
