import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8797334033838065',
  standalone: true,
  templateUrl: './app-8797334033838065.component.html',
  styleUrl: './app-8797334033838065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8797334033838065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
