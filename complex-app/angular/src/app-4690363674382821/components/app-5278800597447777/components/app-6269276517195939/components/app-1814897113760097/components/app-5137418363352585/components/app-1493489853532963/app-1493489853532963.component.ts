import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1493489853532963',
  standalone: true,
  templateUrl: './app-1493489853532963.component.html',
  styleUrl: './app-1493489853532963.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1493489853532963Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
