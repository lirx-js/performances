import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6820331198990725',
  standalone: true,
  templateUrl: './app-6820331198990725.component.html',
  styleUrl: './app-6820331198990725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6820331198990725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
