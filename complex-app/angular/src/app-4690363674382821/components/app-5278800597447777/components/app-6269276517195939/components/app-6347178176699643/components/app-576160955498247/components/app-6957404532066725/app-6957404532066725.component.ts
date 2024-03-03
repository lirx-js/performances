import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6957404532066725',
  standalone: true,
  templateUrl: './app-6957404532066725.component.html',
  styleUrl: './app-6957404532066725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6957404532066725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
