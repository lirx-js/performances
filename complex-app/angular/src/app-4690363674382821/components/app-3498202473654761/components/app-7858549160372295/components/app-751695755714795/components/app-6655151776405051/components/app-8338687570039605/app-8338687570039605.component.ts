import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8338687570039605',
  standalone: true,
  templateUrl: './app-8338687570039605.component.html',
  styleUrl: './app-8338687570039605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8338687570039605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
