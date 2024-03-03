import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1061659177268367',
  standalone: true,
  templateUrl: './app-1061659177268367.component.html',
  styleUrl: './app-1061659177268367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1061659177268367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
