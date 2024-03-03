import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7542368718798995',
  standalone: true,
  templateUrl: './app-7542368718798995.component.html',
  styleUrl: './app-7542368718798995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7542368718798995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
