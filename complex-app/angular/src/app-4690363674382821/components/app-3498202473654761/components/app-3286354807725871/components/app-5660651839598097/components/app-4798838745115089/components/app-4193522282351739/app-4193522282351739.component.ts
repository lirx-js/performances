import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4193522282351739',
  standalone: true,
  templateUrl: './app-4193522282351739.component.html',
  styleUrl: './app-4193522282351739.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4193522282351739Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
