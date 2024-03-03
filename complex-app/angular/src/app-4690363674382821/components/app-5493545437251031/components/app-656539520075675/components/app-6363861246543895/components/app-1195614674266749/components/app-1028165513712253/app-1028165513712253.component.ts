import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1028165513712253',
  standalone: true,
  templateUrl: './app-1028165513712253.component.html',
  styleUrl: './app-1028165513712253.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1028165513712253Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}