import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5066337248789831',
  standalone: true,
  templateUrl: './app-5066337248789831.component.html',
  styleUrl: './app-5066337248789831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5066337248789831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
