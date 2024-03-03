import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2025744961208959',
  standalone: true,
  templateUrl: './app-2025744961208959.component.html',
  styleUrl: './app-2025744961208959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2025744961208959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
