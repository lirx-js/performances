import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2948486814118283',
  standalone: true,
  templateUrl: './app-2948486814118283.component.html',
  styleUrl: './app-2948486814118283.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2948486814118283Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
