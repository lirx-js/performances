import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6987095356396323',
  standalone: true,
  templateUrl: './app-6987095356396323.component.html',
  styleUrl: './app-6987095356396323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6987095356396323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
