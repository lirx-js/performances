import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8118186701705723',
  standalone: true,
  templateUrl: './app-8118186701705723.component.html',
  styleUrl: './app-8118186701705723.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8118186701705723Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
