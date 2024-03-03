import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1794548678253911',
  standalone: true,
  templateUrl: './app-1794548678253911.component.html',
  styleUrl: './app-1794548678253911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1794548678253911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
