import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8076284622352561',
  standalone: true,
  templateUrl: './app-8076284622352561.component.html',
  styleUrl: './app-8076284622352561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8076284622352561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
