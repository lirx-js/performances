import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3773618491882811',
  standalone: true,
  templateUrl: './app-3773618491882811.component.html',
  styleUrl: './app-3773618491882811.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3773618491882811Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
