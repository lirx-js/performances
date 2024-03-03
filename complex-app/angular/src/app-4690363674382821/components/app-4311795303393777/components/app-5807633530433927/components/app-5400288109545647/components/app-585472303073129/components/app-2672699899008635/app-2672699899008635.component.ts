import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2672699899008635',
  standalone: true,
  templateUrl: './app-2672699899008635.component.html',
  styleUrl: './app-2672699899008635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2672699899008635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
