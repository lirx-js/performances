import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-268354463256499',
  standalone: true,
  templateUrl: './app-268354463256499.component.html',
  styleUrl: './app-268354463256499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App268354463256499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
