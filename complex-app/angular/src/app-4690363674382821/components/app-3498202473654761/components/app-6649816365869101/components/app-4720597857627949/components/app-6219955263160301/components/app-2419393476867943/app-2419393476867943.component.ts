import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2419393476867943',
  standalone: true,
  templateUrl: './app-2419393476867943.component.html',
  styleUrl: './app-2419393476867943.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2419393476867943Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
