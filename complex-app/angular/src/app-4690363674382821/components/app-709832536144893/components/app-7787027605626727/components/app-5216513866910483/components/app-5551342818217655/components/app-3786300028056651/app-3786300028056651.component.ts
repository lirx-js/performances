import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3786300028056651',
  standalone: true,
  templateUrl: './app-3786300028056651.component.html',
  styleUrl: './app-3786300028056651.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3786300028056651Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
