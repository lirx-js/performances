import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7319327070994643',
  standalone: true,
  templateUrl: './app-7319327070994643.component.html',
  styleUrl: './app-7319327070994643.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7319327070994643Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
