import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7821272593234755',
  standalone: true,
  templateUrl: './app-7821272593234755.component.html',
  styleUrl: './app-7821272593234755.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7821272593234755Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
