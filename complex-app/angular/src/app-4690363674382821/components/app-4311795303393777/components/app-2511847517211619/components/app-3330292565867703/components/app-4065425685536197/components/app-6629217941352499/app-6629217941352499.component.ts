import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6629217941352499',
  standalone: true,
  templateUrl: './app-6629217941352499.component.html',
  styleUrl: './app-6629217941352499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6629217941352499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
