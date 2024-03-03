import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6664565889301605',
  standalone: true,
  templateUrl: './app-6664565889301605.component.html',
  styleUrl: './app-6664565889301605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6664565889301605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
