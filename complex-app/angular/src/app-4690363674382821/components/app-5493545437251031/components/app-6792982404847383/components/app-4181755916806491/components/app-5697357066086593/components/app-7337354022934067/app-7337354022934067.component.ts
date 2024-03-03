import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7337354022934067',
  standalone: true,
  templateUrl: './app-7337354022934067.component.html',
  styleUrl: './app-7337354022934067.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7337354022934067Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
