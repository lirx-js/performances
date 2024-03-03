import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5202176043497349',
  standalone: true,
  templateUrl: './app-5202176043497349.component.html',
  styleUrl: './app-5202176043497349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5202176043497349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
