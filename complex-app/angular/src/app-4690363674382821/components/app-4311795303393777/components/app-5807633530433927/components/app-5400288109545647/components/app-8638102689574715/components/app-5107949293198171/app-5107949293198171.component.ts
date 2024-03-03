import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5107949293198171',
  standalone: true,
  templateUrl: './app-5107949293198171.component.html',
  styleUrl: './app-5107949293198171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5107949293198171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
