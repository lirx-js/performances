import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8315080545565157',
  standalone: true,
  templateUrl: './app-8315080545565157.component.html',
  styleUrl: './app-8315080545565157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8315080545565157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
