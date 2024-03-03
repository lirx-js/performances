import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6705419700598927',
  standalone: true,
  templateUrl: './app-6705419700598927.component.html',
  styleUrl: './app-6705419700598927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6705419700598927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
