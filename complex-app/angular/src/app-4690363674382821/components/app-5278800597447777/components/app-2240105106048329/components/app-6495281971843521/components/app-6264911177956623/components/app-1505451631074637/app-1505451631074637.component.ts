import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1505451631074637',
  standalone: true,
  templateUrl: './app-1505451631074637.component.html',
  styleUrl: './app-1505451631074637.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1505451631074637Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
