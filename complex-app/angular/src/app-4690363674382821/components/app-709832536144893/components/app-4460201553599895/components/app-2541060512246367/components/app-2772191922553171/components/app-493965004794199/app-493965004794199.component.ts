import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-493965004794199',
  standalone: true,
  templateUrl: './app-493965004794199.component.html',
  styleUrl: './app-493965004794199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App493965004794199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
