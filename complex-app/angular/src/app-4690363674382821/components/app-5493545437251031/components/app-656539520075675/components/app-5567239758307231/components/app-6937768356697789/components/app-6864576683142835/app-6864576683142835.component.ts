import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6864576683142835',
  standalone: true,
  templateUrl: './app-6864576683142835.component.html',
  styleUrl: './app-6864576683142835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6864576683142835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
