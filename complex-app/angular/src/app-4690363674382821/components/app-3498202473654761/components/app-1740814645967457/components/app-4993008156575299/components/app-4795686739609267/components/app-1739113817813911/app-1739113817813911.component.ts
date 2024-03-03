import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1739113817813911',
  standalone: true,
  templateUrl: './app-1739113817813911.component.html',
  styleUrl: './app-1739113817813911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1739113817813911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
