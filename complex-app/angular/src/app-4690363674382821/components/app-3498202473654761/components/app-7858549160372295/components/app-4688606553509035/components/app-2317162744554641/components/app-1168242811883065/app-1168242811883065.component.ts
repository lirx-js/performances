import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1168242811883065',
  standalone: true,
  templateUrl: './app-1168242811883065.component.html',
  styleUrl: './app-1168242811883065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1168242811883065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
