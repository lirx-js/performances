import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-878564778746831',
  standalone: true,
  templateUrl: './app-878564778746831.component.html',
  styleUrl: './app-878564778746831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App878564778746831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
