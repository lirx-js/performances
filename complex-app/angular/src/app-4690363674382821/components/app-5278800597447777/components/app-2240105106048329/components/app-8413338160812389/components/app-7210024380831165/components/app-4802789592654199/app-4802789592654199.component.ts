import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4802789592654199',
  standalone: true,
  templateUrl: './app-4802789592654199.component.html',
  styleUrl: './app-4802789592654199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4802789592654199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
