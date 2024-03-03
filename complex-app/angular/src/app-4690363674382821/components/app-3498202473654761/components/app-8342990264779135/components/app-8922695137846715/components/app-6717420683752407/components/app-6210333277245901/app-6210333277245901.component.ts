import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6210333277245901',
  standalone: true,
  templateUrl: './app-6210333277245901.component.html',
  styleUrl: './app-6210333277245901.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6210333277245901Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
