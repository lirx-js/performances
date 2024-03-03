import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1091850204388639',
  standalone: true,
  templateUrl: './app-1091850204388639.component.html',
  styleUrl: './app-1091850204388639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1091850204388639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
