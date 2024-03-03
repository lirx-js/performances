import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1221187362727091',
  standalone: true,
  templateUrl: './app-1221187362727091.component.html',
  styleUrl: './app-1221187362727091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1221187362727091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
