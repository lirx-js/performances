import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2288295129848239',
  standalone: true,
  templateUrl: './app-2288295129848239.component.html',
  styleUrl: './app-2288295129848239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2288295129848239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
