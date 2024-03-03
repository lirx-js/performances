import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3495358964651915',
  standalone: true,
  templateUrl: './app-3495358964651915.component.html',
  styleUrl: './app-3495358964651915.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3495358964651915Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
