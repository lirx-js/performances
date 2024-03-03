import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6824641120865697',
  standalone: true,
  templateUrl: './app-6824641120865697.component.html',
  styleUrl: './app-6824641120865697.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6824641120865697Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
