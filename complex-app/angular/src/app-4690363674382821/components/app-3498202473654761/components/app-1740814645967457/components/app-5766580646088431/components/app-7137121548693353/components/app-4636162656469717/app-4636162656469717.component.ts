import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4636162656469717',
  standalone: true,
  templateUrl: './app-4636162656469717.component.html',
  styleUrl: './app-4636162656469717.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4636162656469717Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
