import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3378406175145053',
  standalone: true,
  templateUrl: './app-3378406175145053.component.html',
  styleUrl: './app-3378406175145053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3378406175145053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
