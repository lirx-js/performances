import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3658730999631029',
  standalone: true,
  templateUrl: './app-3658730999631029.component.html',
  styleUrl: './app-3658730999631029.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3658730999631029Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
