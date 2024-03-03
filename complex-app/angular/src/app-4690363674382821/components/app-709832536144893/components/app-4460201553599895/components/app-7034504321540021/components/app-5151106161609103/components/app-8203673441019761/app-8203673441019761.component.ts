import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8203673441019761',
  standalone: true,
  templateUrl: './app-8203673441019761.component.html',
  styleUrl: './app-8203673441019761.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8203673441019761Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
