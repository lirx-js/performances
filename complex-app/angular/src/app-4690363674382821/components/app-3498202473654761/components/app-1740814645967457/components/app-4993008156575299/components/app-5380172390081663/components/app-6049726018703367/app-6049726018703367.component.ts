import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6049726018703367',
  standalone: true,
  templateUrl: './app-6049726018703367.component.html',
  styleUrl: './app-6049726018703367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6049726018703367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
