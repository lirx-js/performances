import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1721938806547807',
  standalone: true,
  templateUrl: './app-1721938806547807.component.html',
  styleUrl: './app-1721938806547807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1721938806547807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
