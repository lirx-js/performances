import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5513001661143129',
  standalone: true,
  templateUrl: './app-5513001661143129.component.html',
  styleUrl: './app-5513001661143129.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5513001661143129Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
