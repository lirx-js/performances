import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1258597926432965',
  standalone: true,
  templateUrl: './app-1258597926432965.component.html',
  styleUrl: './app-1258597926432965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1258597926432965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
