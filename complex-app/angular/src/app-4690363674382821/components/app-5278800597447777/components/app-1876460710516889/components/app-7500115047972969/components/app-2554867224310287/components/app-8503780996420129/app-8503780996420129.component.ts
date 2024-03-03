import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8503780996420129',
  standalone: true,
  templateUrl: './app-8503780996420129.component.html',
  styleUrl: './app-8503780996420129.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8503780996420129Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
