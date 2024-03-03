import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2122617198899475',
  standalone: true,
  templateUrl: './app-2122617198899475.component.html',
  styleUrl: './app-2122617198899475.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2122617198899475Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
