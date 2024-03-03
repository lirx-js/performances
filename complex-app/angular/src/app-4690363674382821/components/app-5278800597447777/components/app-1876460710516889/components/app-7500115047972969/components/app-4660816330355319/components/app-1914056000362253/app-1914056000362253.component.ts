import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1914056000362253',
  standalone: true,
  templateUrl: './app-1914056000362253.component.html',
  styleUrl: './app-1914056000362253.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1914056000362253Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
