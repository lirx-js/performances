import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-897980660266605',
  standalone: true,
  templateUrl: './app-897980660266605.component.html',
  styleUrl: './app-897980660266605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App897980660266605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
