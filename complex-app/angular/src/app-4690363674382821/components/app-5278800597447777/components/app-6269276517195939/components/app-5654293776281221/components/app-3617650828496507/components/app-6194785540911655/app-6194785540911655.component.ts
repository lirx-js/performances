import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6194785540911655',
  standalone: true,
  templateUrl: './app-6194785540911655.component.html',
  styleUrl: './app-6194785540911655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6194785540911655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
