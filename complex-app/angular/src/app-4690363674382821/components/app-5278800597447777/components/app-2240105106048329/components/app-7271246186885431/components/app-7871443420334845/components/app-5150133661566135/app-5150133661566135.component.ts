import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5150133661566135',
  standalone: true,
  templateUrl: './app-5150133661566135.component.html',
  styleUrl: './app-5150133661566135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5150133661566135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
