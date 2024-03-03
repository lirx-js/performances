import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7891437095690197',
  standalone: true,
  templateUrl: './app-7891437095690197.component.html',
  styleUrl: './app-7891437095690197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7891437095690197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
