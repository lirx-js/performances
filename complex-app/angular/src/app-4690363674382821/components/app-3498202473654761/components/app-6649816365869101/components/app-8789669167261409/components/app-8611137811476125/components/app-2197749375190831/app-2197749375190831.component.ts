import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2197749375190831',
  standalone: true,
  templateUrl: './app-2197749375190831.component.html',
  styleUrl: './app-2197749375190831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2197749375190831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
