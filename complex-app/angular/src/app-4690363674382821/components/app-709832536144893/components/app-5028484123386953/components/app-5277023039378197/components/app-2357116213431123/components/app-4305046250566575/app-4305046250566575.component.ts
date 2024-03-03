import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4305046250566575',
  standalone: true,
  templateUrl: './app-4305046250566575.component.html',
  styleUrl: './app-4305046250566575.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4305046250566575Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
