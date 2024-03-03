import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6268910447200831',
  standalone: true,
  templateUrl: './app-6268910447200831.component.html',
  styleUrl: './app-6268910447200831.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6268910447200831Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
