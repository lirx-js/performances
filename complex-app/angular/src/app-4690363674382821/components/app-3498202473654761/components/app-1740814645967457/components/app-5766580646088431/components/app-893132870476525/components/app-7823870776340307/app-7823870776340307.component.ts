import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7823870776340307',
  standalone: true,
  templateUrl: './app-7823870776340307.component.html',
  styleUrl: './app-7823870776340307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7823870776340307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
