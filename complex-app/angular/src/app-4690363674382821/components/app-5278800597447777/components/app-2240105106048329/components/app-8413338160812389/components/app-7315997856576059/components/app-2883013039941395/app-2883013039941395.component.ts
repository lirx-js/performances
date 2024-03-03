import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2883013039941395',
  standalone: true,
  templateUrl: './app-2883013039941395.component.html',
  styleUrl: './app-2883013039941395.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2883013039941395Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
