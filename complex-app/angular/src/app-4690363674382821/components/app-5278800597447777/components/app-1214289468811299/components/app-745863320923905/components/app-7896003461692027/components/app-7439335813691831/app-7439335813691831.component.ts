import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7439335813691831',
  standalone: true,
  templateUrl: './app-7439335813691831.component.html',
  styleUrl: './app-7439335813691831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7439335813691831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
