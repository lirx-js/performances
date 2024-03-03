import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5241057138379323',
  standalone: true,
  templateUrl: './app-5241057138379323.component.html',
  styleUrl: './app-5241057138379323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5241057138379323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
