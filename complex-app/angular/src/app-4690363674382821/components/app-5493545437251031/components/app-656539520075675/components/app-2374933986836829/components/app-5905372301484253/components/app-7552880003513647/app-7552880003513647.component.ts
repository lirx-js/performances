import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7552880003513647',
  standalone: true,
  templateUrl: './app-7552880003513647.component.html',
  styleUrl: './app-7552880003513647.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7552880003513647Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
