import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2928106278728349',
  standalone: true,
  templateUrl: './app-2928106278728349.component.html',
  styleUrl: './app-2928106278728349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2928106278728349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
