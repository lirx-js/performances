import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7718421759073437',
  standalone: true,
  templateUrl: './app-7718421759073437.component.html',
  styleUrl: './app-7718421759073437.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7718421759073437Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
