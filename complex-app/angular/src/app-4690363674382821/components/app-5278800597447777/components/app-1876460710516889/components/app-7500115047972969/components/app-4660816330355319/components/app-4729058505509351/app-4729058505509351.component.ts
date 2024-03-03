import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4729058505509351',
  standalone: true,
  templateUrl: './app-4729058505509351.component.html',
  styleUrl: './app-4729058505509351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4729058505509351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
