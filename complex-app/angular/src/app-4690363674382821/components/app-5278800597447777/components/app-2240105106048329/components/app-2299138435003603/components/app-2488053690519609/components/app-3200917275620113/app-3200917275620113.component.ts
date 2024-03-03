import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3200917275620113',
  standalone: true,
  templateUrl: './app-3200917275620113.component.html',
  styleUrl: './app-3200917275620113.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3200917275620113Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
