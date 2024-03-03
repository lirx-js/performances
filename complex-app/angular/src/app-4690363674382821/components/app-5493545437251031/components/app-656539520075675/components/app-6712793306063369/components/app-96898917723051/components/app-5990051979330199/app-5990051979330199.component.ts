import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5990051979330199',
  standalone: true,
  templateUrl: './app-5990051979330199.component.html',
  styleUrl: './app-5990051979330199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5990051979330199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
