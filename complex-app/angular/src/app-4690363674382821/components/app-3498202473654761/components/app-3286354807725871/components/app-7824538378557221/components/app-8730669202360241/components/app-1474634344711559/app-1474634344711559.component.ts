import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1474634344711559',
  standalone: true,
  templateUrl: './app-1474634344711559.component.html',
  styleUrl: './app-1474634344711559.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1474634344711559Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
