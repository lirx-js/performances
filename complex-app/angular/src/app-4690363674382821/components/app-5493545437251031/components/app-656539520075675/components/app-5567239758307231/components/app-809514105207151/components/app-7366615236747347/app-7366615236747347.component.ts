import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7366615236747347',
  standalone: true,
  templateUrl: './app-7366615236747347.component.html',
  styleUrl: './app-7366615236747347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7366615236747347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
