import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2649447747921369',
  standalone: true,
  templateUrl: './app-2649447747921369.component.html',
  styleUrl: './app-2649447747921369.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2649447747921369Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
