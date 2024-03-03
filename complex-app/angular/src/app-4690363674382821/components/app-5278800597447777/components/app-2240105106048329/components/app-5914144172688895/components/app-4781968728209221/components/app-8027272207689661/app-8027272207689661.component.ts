import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8027272207689661',
  standalone: true,
  templateUrl: './app-8027272207689661.component.html',
  styleUrl: './app-8027272207689661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8027272207689661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
