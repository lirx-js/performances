import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7214861628474013',
  standalone: true,
  templateUrl: './app-7214861628474013.component.html',
  styleUrl: './app-7214861628474013.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7214861628474013Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
