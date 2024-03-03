import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1735939933152689',
  standalone: true,
  templateUrl: './app-1735939933152689.component.html',
  styleUrl: './app-1735939933152689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1735939933152689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
