import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1928893882548847',
  standalone: true,
  templateUrl: './app-1928893882548847.component.html',
  styleUrl: './app-1928893882548847.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1928893882548847Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
