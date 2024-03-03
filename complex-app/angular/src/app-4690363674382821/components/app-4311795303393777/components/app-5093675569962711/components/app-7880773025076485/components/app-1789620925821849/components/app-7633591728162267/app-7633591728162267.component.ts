import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7633591728162267',
  standalone: true,
  templateUrl: './app-7633591728162267.component.html',
  styleUrl: './app-7633591728162267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7633591728162267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
