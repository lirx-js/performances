import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7404343583595831',
  standalone: true,
  templateUrl: './app-7404343583595831.component.html',
  styleUrl: './app-7404343583595831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7404343583595831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
