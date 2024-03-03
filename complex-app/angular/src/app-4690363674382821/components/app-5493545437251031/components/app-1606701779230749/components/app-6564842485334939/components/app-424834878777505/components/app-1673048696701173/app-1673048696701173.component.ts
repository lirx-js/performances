import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1673048696701173',
  standalone: true,
  templateUrl: './app-1673048696701173.component.html',
  styleUrl: './app-1673048696701173.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1673048696701173Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
