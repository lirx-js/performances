import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1691226776974239',
  standalone: true,
  templateUrl: './app-1691226776974239.component.html',
  styleUrl: './app-1691226776974239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1691226776974239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
