import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6038710163820351',
  standalone: true,
  templateUrl: './app-6038710163820351.component.html',
  styleUrl: './app-6038710163820351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6038710163820351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
