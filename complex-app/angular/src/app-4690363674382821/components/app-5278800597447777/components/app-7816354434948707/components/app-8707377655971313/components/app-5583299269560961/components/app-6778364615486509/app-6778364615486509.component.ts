import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6778364615486509',
  standalone: true,
  templateUrl: './app-6778364615486509.component.html',
  styleUrl: './app-6778364615486509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6778364615486509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
