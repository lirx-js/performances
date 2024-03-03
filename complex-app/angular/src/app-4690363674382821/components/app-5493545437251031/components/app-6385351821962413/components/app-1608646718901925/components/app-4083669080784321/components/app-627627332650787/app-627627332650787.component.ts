import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-627627332650787',
  standalone: true,
  templateUrl: './app-627627332650787.component.html',
  styleUrl: './app-627627332650787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App627627332650787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
