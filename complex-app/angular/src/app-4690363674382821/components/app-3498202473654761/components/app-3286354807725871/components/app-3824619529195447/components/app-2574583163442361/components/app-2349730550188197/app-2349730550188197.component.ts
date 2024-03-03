import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2349730550188197',
  standalone: true,
  templateUrl: './app-2349730550188197.component.html',
  styleUrl: './app-2349730550188197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2349730550188197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
