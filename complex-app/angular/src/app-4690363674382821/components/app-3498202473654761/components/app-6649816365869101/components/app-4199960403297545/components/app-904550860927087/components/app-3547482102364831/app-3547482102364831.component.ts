import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3547482102364831',
  standalone: true,
  templateUrl: './app-3547482102364831.component.html',
  styleUrl: './app-3547482102364831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3547482102364831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
