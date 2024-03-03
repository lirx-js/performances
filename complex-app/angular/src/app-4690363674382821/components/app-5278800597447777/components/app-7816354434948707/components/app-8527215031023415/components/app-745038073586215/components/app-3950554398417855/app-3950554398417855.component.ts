import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3950554398417855',
  standalone: true,
  templateUrl: './app-3950554398417855.component.html',
  styleUrl: './app-3950554398417855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3950554398417855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
