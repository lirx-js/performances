import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3464610299892803',
  standalone: true,
  templateUrl: './app-3464610299892803.component.html',
  styleUrl: './app-3464610299892803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3464610299892803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
