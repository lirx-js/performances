import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1078590174538291',
  standalone: true,
  templateUrl: './app-1078590174538291.component.html',
  styleUrl: './app-1078590174538291.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1078590174538291Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
