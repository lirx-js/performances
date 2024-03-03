import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1130893782056731',
  standalone: true,
  templateUrl: './app-1130893782056731.component.html',
  styleUrl: './app-1130893782056731.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1130893782056731Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
