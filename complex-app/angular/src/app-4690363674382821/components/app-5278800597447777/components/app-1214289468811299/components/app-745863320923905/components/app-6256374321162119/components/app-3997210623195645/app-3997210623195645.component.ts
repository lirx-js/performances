import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3997210623195645',
  standalone: true,
  templateUrl: './app-3997210623195645.component.html',
  styleUrl: './app-3997210623195645.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3997210623195645Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
