import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3152860126644227',
  standalone: true,
  templateUrl: './app-3152860126644227.component.html',
  styleUrl: './app-3152860126644227.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3152860126644227Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
