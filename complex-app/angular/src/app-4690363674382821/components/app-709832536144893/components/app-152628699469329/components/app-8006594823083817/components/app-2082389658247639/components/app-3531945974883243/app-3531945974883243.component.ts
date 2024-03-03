import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3531945974883243',
  standalone: true,
  templateUrl: './app-3531945974883243.component.html',
  styleUrl: './app-3531945974883243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3531945974883243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
