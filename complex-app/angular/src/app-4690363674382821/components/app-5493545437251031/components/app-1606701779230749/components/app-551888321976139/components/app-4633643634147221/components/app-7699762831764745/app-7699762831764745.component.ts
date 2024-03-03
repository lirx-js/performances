import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7699762831764745',
  standalone: true,
  templateUrl: './app-7699762831764745.component.html',
  styleUrl: './app-7699762831764745.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7699762831764745Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
