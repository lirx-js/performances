import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6682111775659887',
  standalone: true,
  templateUrl: './app-6682111775659887.component.html',
  styleUrl: './app-6682111775659887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6682111775659887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
