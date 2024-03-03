import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5684716939222517',
  standalone: true,
  templateUrl: './app-5684716939222517.component.html',
  styleUrl: './app-5684716939222517.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5684716939222517Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
