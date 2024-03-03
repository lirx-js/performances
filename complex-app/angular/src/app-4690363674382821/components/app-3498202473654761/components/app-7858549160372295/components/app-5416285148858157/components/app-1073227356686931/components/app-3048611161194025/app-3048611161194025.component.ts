import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3048611161194025',
  standalone: true,
  templateUrl: './app-3048611161194025.component.html',
  styleUrl: './app-3048611161194025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3048611161194025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
