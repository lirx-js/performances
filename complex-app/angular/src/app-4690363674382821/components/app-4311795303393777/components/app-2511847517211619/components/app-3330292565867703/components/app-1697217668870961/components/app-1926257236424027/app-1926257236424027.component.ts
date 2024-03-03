import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1926257236424027',
  standalone: true,
  templateUrl: './app-1926257236424027.component.html',
  styleUrl: './app-1926257236424027.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1926257236424027Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
