import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5387163094501053',
  standalone: true,
  templateUrl: './app-5387163094501053.component.html',
  styleUrl: './app-5387163094501053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5387163094501053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
