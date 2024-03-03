import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2959910142769519',
  standalone: true,
  templateUrl: './app-2959910142769519.component.html',
  styleUrl: './app-2959910142769519.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2959910142769519Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
