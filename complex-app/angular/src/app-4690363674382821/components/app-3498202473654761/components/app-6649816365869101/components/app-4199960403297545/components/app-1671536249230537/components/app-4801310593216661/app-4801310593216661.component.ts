import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4801310593216661',
  standalone: true,
  templateUrl: './app-4801310593216661.component.html',
  styleUrl: './app-4801310593216661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4801310593216661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
