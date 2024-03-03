import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1353583242071505',
  standalone: true,
  templateUrl: './app-1353583242071505.component.html',
  styleUrl: './app-1353583242071505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1353583242071505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
