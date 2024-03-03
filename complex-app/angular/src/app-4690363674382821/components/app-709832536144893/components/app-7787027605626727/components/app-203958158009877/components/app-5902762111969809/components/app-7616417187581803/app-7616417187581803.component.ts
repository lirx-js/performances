import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7616417187581803',
  standalone: true,
  templateUrl: './app-7616417187581803.component.html',
  styleUrl: './app-7616417187581803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7616417187581803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
