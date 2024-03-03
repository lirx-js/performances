import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1142321609266829',
  standalone: true,
  templateUrl: './app-1142321609266829.component.html',
  styleUrl: './app-1142321609266829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1142321609266829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
