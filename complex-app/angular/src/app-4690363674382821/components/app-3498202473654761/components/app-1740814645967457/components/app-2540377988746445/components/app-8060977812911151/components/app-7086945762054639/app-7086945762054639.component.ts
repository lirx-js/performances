import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7086945762054639',
  standalone: true,
  templateUrl: './app-7086945762054639.component.html',
  styleUrl: './app-7086945762054639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7086945762054639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
