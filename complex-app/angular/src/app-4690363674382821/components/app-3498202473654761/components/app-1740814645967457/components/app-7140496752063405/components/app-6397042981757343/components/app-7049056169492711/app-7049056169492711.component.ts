import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7049056169492711',
  standalone: true,
  templateUrl: './app-7049056169492711.component.html',
  styleUrl: './app-7049056169492711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7049056169492711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
