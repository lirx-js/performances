import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1363262668481831',
  standalone: true,
  templateUrl: './app-1363262668481831.component.html',
  styleUrl: './app-1363262668481831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1363262668481831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
