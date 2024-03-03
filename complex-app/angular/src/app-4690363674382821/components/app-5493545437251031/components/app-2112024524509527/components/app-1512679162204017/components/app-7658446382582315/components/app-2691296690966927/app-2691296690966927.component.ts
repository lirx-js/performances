import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2691296690966927',
  standalone: true,
  templateUrl: './app-2691296690966927.component.html',
  styleUrl: './app-2691296690966927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2691296690966927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
