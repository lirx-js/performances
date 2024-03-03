import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1563322603963711',
  standalone: true,
  templateUrl: './app-1563322603963711.component.html',
  styleUrl: './app-1563322603963711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1563322603963711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
