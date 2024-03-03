import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1283262374418683',
  standalone: true,
  templateUrl: './app-1283262374418683.component.html',
  styleUrl: './app-1283262374418683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1283262374418683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
