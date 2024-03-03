import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7033838521359199',
  standalone: true,
  templateUrl: './app-7033838521359199.component.html',
  styleUrl: './app-7033838521359199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7033838521359199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
