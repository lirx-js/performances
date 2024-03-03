import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5252914086815425',
  standalone: true,
  templateUrl: './app-5252914086815425.component.html',
  styleUrl: './app-5252914086815425.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5252914086815425Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
