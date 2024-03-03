import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-527296218800807',
  standalone: true,
  templateUrl: './app-527296218800807.component.html',
  styleUrl: './app-527296218800807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App527296218800807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
