import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3190510741771601',
  standalone: true,
  templateUrl: './app-3190510741771601.component.html',
  styleUrl: './app-3190510741771601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3190510741771601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
